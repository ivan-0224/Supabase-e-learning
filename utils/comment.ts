"use server"

import { createClient } from "./supabase/server"
import { Comment } from "./types"


export const getComments = async(courseId:string)=>{
    const supabase =await createClient()
    const {data, error} = await supabase.from("comments").select("*").eq("course_id",courseId).order("created_at", {ascending:false})

    if(data){

        return data as Comment[]
    }
    if(error){
        throw error
    }

}