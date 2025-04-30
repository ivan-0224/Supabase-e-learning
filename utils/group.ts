"use server"

import { createClient } from "./supabase/server"
import { Group, StudentGroup } from "./types";

//FIND GROUP BY CLASS ID AND GROUP NUMBER
export const findGroupByNum = async(classId: string, groupNum:string)=>{
    const supabase = await createClient();
    const {data,error} = await supabase.from("group").select("*").eq("class_id", classId).eq("group_num", groupNum).single();

    if(error){
        return null
    }

    if(data){
        return data as Group
    }

}

//Creat a group
export const createGroup = async (classId:string, groupNum:string)=>{
    const supabase = await createClient();
    const group:Group[] =[
        {
            class_id:classId,
            group_num:groupNum
        }
    ] 
    const {data,error} = await supabase.from("group").insert(group).select("*").single()
    if(error){
        throw error

    }
    if(data){
        return data as Group
    }
}
// add the student to the studentgroup table
export const CreateStudentGroup = async (studentId: string, groupId:string)=>{
    const supabase = await createClient();
    const student_group:StudentGroup[] = [
        {
            student_id:studentId,
            group_id:groupId
        }
    ]
    const {error} = await supabase.from("StudentGroup").insert(student_group)
    if(error){
        console.log(error)
        return error
    }
    return null
}