
"use server"

import { GetUser } from "./getuser"
import { createClient } from "./supabase/server"

export const getCreatedClass = async ()=>{
    const supabase = await createClient();
    const user = await GetUser()
    const {data} = await supabase.from("class").select("*").eq("teacher_id",user?.id)

    if(data){
        return data
    }
}