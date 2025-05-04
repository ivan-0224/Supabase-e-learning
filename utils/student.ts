"use server"

import { User } from "@supabase/supabase-js";


import { createClient } from "./supabase/server";

export const AddStudent = async(user:User|null)=>{

    const supabase = await createClient();
    await supabase.from("student").insert([
        {
            student_id:user?.id as string,
            student_name:user?.user_metadata.full_name as string,
            student_mail:user?.email as string,
            studentImg:user?.user_metadata.avatar_url as string
        }
    ])
}

export const GetStudentById = async (StudentId:String)=>{
    const supabase = await createClient();
    const student = await supabase.from("student").select("*").eq("student_id", StudentId).single()
    
    if(student){
        return student
    }
    return null
}



export const GetStudents = async (classId: string | null)=>{

    const supabase = await createClient();
    //Get the id of the students that joined the class
    const {data} = await supabase.from("studentClass").select("*").eq("class_id",classId );

    //get all the information about the students
    if(data){
            const Students = await Promise.all(
                data.map(async (studentClass) => {
                  const studentId = studentClass.student_id as string;
                  const student =  await GetStudentById(studentId);
                  const  studentInfo = {
                    student_id:studentId,
                    student_name:student?.data.student_name as string,
                    studentImg:student?.data.studentImg as string,
                    student_mail:student?.data.student_mail as string,
                    class_id: classId as string,
                  }
                  return studentInfo
                })
              );
            if(Students){
                return Students
            }
            return null
    
        }
        return null

}