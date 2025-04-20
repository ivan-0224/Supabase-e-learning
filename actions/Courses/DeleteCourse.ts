"use server"

import { createClient } from "@/utils/supabase/server"

export const DeleteCourse = async(state:any, formdata:FormData, CourseId:string)=>{

    const supabase = await createClient()
    const {error}  = await supabase.from("course").delete().eq("course_id", CourseId)

    if(error){
        return {error:"Error in the server try another time or refresh the page"}
    }
    return {succes:"Course is deleted Succesfully"}
    
}