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

export const getJoinedClass = async ()=>{
    const supabase = await createClient()

    return 0;
}