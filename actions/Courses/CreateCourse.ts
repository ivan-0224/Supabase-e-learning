"use server"

import { addCourse } from "@/utils/course";
import { addDocument, findDocByHashCode } from "@/utils/docs";
import { createClient } from "@/utils/supabase/server";
import {  Doc } from "@/utils/types";
import { z } from "zod";


const CourseSchema = z.object(
  {
    courseName: z.string().min(3).trim(),
    courseDesc: z.string().max(100).trim()  
  }
)




export const CreateCourse = async(state:any , formdata:FormData, files:Doc[], classID:string,CourseType?:string|null|undefined)=>{
  const supabase = await createClient();

  const courseName = formdata.get('courseName') as string
  const courseDesc = formdata.get('courseDesc') as string
  const docs = files 

  const ValidFields = CourseSchema.safeParse({
    courseName:courseName,
    courseDesc:courseDesc,
  })
  if(!ValidFields.success){
    return {fieldsError: ValidFields.error.flatten().fieldErrors }
  }

  // FIRST : WE ADD THE COURSE
  const AddCourse= await addCourse([{class_id:classID,course_name:courseName, course_descriptions:courseDesc, course_type:CourseType}])


  if(AddCourse){
    var courseId = AddCourse[0].course_id
  }

  // SECOND : IF THE USER ADDED FILES
  // WE ADD THEM TO DOCUMENTS TABLE
  // THAN WE ADD THEM TO THE COURSEDOCUMENT TABLE
  if(docs){
    docs.map(async (doc)=>{
      const hashCode = doc.hash_value as string
      //If THE hash code of the document doesnt appear in the document table we add the document to the doc table
      const DOC :Doc[]= await findDocByHashCode(hashCode)



      //IF THE DOCUMENT DOESN'T EXIST WE ADD IT TO THE DOCUMENT TABLE
      if(DOC.length === 0){
        const addDoc = await addDocument([doc])
        if (addDoc){
          const docId = addDoc[0].doc_id 
          //ADD THE DOCUMENT TO THE COURSE DOC TABLE
          const {error} = await supabase.from("CourseDocument").insert([{
            course_id:courseId as string,
            doc_id:docId as string
          }])
          if(error){
              return {Error:"Error in Creating Documents try again"}
          }
        };


      }else{
        //ADD THE DOCUMENT TO THE COURSE DOC TABLE
        const docId = DOC[0].doc_id 
        const {error} = await supabase.from("CourseDocument").insert([{
          course_id:courseId as string,
          doc_id:docId as string
        }])
        if(error){
          return {Error:"Error in Creating Documents try again"}
        }
      }
    })
  }
  if(CourseType === "TD"){
    return {success:"TD Created Succefully !"}

  }
  return {success:"Course Created Succefully !"}
}

