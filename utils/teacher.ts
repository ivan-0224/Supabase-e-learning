"use server"

import { createClient } from "./supabase/server"
import { Teacher } from "./types"


export const getTeacherById = async(teaher_id:string)=>{
    const supabase = await createClient()
    
    //GEt the teacher
    const {data} = await supabase.from("teacher").select("*").eq("teacher_id",teaher_id).single()
    if (data){
        return data as any as Teacher
    }
}