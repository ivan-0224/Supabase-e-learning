"use server"

import { createClient } from "./supabase/server";
import { Course } from "./types";



export const addTD = async (td:Course[]) => {
 
  const supabase = await createClient();
  const {data,error} = await supabase.from("course").insert(td).select()

  if(error){
    throw(error)
  }
  if(data){
    return data as Course[]
  }
}

export const getTDs = async (classId:string)=>{
  const supabase = await createClient()
  //Get td
  const {data} = await supabase.from("course").select("*").eq("class_id", classId).eq("course_type", "TD").order("created_at",{ascending:false})
  if(data){
    return data as Course[]
  }
  return null
}
