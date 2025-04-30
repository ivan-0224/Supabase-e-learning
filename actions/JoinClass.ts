
"use server"

import { FindClassById, getClassById } from "@/utils/getclass";
import { GetUser } from "@/utils/getuser";
import { createGroup, CreateStudentGroup, findGroupByNum } from "@/utils/group";
import { AddStudent } from "@/utils/student";
import { createClient } from "@/utils/supabase/server"
import { Group } from "@/utils/types";
import {  z } from "zod";

//Zod schema to check the input value
const SchemaClassCode = z.string().uuid({message:"invalid Code"})

export const JoinClass = async(state:any, formData:FormData)=>{

    const supabase = await createClient();

    //CLass code
    const class_id = formData.get("classCode") as string
    
    //Class groupe
    const groupe_num = formData.get("groupe") as string


    //Check the validation of the field
    const ValidClassCode = SchemaClassCode.safeParse(class_id)

    if(!ValidClassCode.success){
        return {invalidCode:"* Invalid Code"};
    }else{
        //NOW we can search if class exist or not 
        const SearchClassBycode = await FindClassById(class_id);
        
        if(!SearchClassBycode){
            return {ClassNotFound: "* Their is no class with this code" };

        }else{
            const user = await GetUser();
            //Now we check if user is a teacher or not
            //He cant join if he is a teacher
            const {teacher_id} = await getClassById(class_id)

            if(teacher_id == user?.id){
                return {TeacherWarent : "You are already a teacher on this class"}
            }

            //Add the user as a student
            await AddStudent(user);
            //Now join the user to the selected class
            //Add the user to studentClass table
            const {error} = await supabase.from("studentClass").insert([
                {
                    student_id : user?.id as string,
                    class_id : class_id 
                }
            ])
            if(error){
                return {JoinError:"You Joined this class Before"}
            }else{
                //Add the student to the selected group
                // first we need to create the group if it does not exist 
                const group = await findGroupByNum(class_id, groupe_num)
                if(!group){
                    //Create the group
                    const created_group = await createGroup(class_id, groupe_num)
                    //add the user to the student group table
                    const created_student_group = await CreateStudentGroup(user?.id as string,created_group?.group_id as string)

                    if(!created_student_group){
                        return {succes:"You Joined the class Succefully !"}
                    }

                }
                 //add the user to the student group table
                 const created_student_group = await CreateStudentGroup(user?.id as string,group?.group_id as string)
                 if(!created_student_group){
                    return {succes:"You Joined the class Succefully !"}

                 }
            }
        }
    }

}