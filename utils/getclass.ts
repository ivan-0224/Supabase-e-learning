"use server"
import { User } from "@supabase/supabase-js";
import { createClient } from "./supabase/server";
import { array } from "zod";


export const getCreatedClass = async (user:User)=>{
    const supabase = await createClient()
    const {data} = await supabase.from("class").select("*").eq("teacher_id",user?.id)
    if(data){
        return data
    }
}

export const getJoinedClass = async (user:User)=>{
    const supabase = await createClient();
    //first get the classes id from studentClass table
    const {data} = await supabase.from("studentClass").select("*").eq("student_id",user?.id)
    if(data){
        const classes = await Promise.all(
            data.map(async (studentClass) => {
              const classId = studentClass.class_id as string;
              return await getClassById(classId);
            })
          );
        if(classes){
            return classes
        }

    }

}

export const getClassById = async(classId:string)=>{
    const supabase = await createClient()
    const {data} = await supabase.from("class").select("*").eq("class_id",classId).single()
    if(data){
        return data as Class
    }else{
        return data
    }
}


export const FindClassById = async(classId:string)=>{
    const supabase = await createClient()
    const {data} = await supabase.from("class").select("*").eq("class_id",classId).single()

    if(data){
        return true
    }else{
        return false
    }
}

