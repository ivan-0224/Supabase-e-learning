"use server"

import { createClient } from "./supabase/server"
import { Doc } from "./types";

export const findDocByHashCode = async (code:string)=>{
    const supabase = await createClient();

    const {data, error} = await supabase.from("document").select('*').eq("hash_value" , code)
    if(!error){
        return data as Doc[]
    }else{
        throw(error)
    }
}

export const addDocument = async (doc:Doc[])=>{
    const supabase = await createClient();
    const {data,error} = await supabase.from("document").insert(doc).select()
    if(error){
        throw error
    }
    if(data){

        return data as Doc[]
    }
}

export const addCourseDoc = async(courseId:string, docId:string)=>{
    const supabase = await createClient();
    const {error} = await supabase.from("CourseDocument").insert([{course_id:courseId, doc_id:docId}])
    if(error){
        console.log(error)
        return false
    }
    return true
}

