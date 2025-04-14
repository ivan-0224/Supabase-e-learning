"use server"

import { createClient } from "@/utils/supabase/server";






//to create a course first you need to:
// 1 * add the course name and description to the course table
// 2 * add the document informations to the documents table if it did not exist before 
//--- TO CHECK IF A DOCUMENT DID'NT EXIST BEFORE U MUST CHEKC THE HASH VALUE OF THE TWO FILE DATA IF THEY ARE THE SAME OR NOT
// 3 * then and finally  add the document id and the course id to the CourseDocument table if the file id did'nt exist before in the course documents

const CreateCourse = async(state:any , formdata:FormData, files:File[])=>{
  const supabase = await createClient();

  
  
}

