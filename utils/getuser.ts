"use server"
import { createClient } from "./supabase/server"

export const GetUser = async ()=>{
    const supabase = await createClient()
    const {data} = await supabase.auth.getUser();

    return data.user
}