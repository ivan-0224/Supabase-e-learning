"use server"
import { User } from "@supabase/supabase-js";
import { createClient } from "./supabase/server";


export const getCreatedClass = async (user:User)=>{
    const supabase = await createClient()
    const {data} = await supabase.from("class").select("*").eq("teacher_id",user?.id)
    if(data){
        return data
    }
}

export const getJoinedClass = async (user:User)=>{
    const supabase = await createClient();
    return 0;
}


export const getClassById = async(classId:string)=>{
    const supabase = await createClient()
    const {data} = await supabase.from("class").select("*").eq("class_id",classId).single()

    if(data){
        return true
    }else{
        return false
    }
}