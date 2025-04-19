"use server"

import { createClient } from "./supabase/server";
import { Course } from "./types";


//to create a course first you need to:
// 1 * add the course name and description to the course table
// 2 * add the document informations to the documents table if it did not exist before 
//--- TO CHECK IF A DOCUMENT DID'NT EXIST BEFORE U MUST CHEKC THE HASH VALUE OF THE TWO FILE DATA IF THEY ARE THE SAME OR NOT
// 3 * then and finally  add the document id and the course id to the CourseDocument table if the file id did'nt exist before in the course documents

export const addCourse = async (course:Course[]) => {
  const supabase = await createClient();
  const {data,error} = await supabase.from("course").insert(course).select()

  if(error){
    throw(error)
  }
  if(data){
    return data as Course[]
  }
}

export const getCourses = async (classId:string)=>{
  const supabase = await createClient()
  //Get Courses
  const {data} = await supabase.from("course").select("*").eq("class_id", classId).order("created_at",{ascending:false})
  if(data){
    return data as Course[]
  }
  return null
}
