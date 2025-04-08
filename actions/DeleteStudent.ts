'use server'

import { createClient } from "@/utils/supabase/server"

export const DeleteStudent = async (StudentId:string, classId:string)=>{
    const supabase = await createClient()
    const {error} = await supabase.from("studentClass").delete().eq("student_id",StudentId).eq("class_id",classId)

    if(error){
        return {error: error.message}
    }
    return {succes:"Deleted Succefully"}
}