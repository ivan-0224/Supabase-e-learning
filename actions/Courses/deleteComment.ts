"use server"

import { createClient } from "@/utils/supabase/server"

export const deleteComment = async(state:any, formatdata:FormData, CommentId:string)=>{
    const supabase = await createClient()

    const {error} = await supabase.from("comments").delete().eq("comment_id",CommentId) 
    if(error){
        return {error:"Try another time error in the server"}
    }
    return {succes:"Comment Deleted Succesfully"}
}