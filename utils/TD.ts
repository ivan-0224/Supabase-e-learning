"use server"

import { createClient } from "./supabase/server";
import { TD } from "./types";



export const addTD = async (td:TD[]) => {
 
  const supabase = await createClient();
  const {data,error} = await supabase.from("TD").insert(td).select()

  if(error){
    throw(error)
  }
  if(data){
    return data as TD[]
  }
}

export const getTDs = async (classId:string)=>{
  const supabase = await createClient()
  //Get td
  const {data} = await supabase.from("TD").select("*").eq("class_id", classId).order("created_at",{ascending:false})
  if(data){
    return data as TD[]
  }
  return null
}
