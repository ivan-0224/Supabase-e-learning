"use server"

import { createClient } from "@/utils/supabase/server"

export const DeleteTd = async(state:any, formdata:FormData, tdId:string)=>{

    const supabase = await createClient()
    const {error}  = await supabase.from("TD").delete().eq("td_id", tdId)

    if(error){
        return {error:"Error in the server try another time or refresh the page"}
    }
    return {succes:"TD is deleted Succesfully"}
    
}