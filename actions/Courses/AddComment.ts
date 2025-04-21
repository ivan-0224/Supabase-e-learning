"use server"

import { GetUser } from "@/utils/getuser"
import { createClient } from "@/utils/supabase/server"
import { z } from "zod"


const CommentSchema = z.string().trim()

export const AddComment = async (state:any, formdata:FormData,CourseId:string)=>{
    const comment = formdata.get("comment") as string

    const commentIsValid = CommentSchema.safeParse(comment)
    console.log(comment)
    if(!commentIsValid){
        return {error:"Comment invalid"}
    }

    //ADD the comment
    const supabse = await createClient()
    const user = await GetUser()
    const {error} = await supabse.from("comments").insert([{user_name:user?.user_metadata.full_name as string, context:comment as string, course_id:CourseId, comment_img:user?.user_metadata.avatar_url}])

    if(error){
        return {error:"Erreur in the server try another time"}
    }
}