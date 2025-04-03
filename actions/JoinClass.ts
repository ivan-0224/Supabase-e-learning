
"use server"

import { getClassById } from "@/utils/getclass";
import { GetUser } from "@/utils/getuser";
import { AddStudent } from "@/utils/student";
import { createClient } from "@/utils/supabase/server"
import {  z } from "zod";

//Zod schema to check the input value
const SchemaClassCode = z.string().uuid({message:"invalid Code"})

export const JoinClass = async(state:any, formData:FormData)=>{

    const supabase = await createClient();

    //CLass code
    const class_id = formData.get("classCode") as string
    
    //Check the validation of the field
    const ValidClassCode = SchemaClassCode.safeParse(class_id)

    if(!ValidClassCode.success){
        return {invalidCode:"* Invalid Code"};
    }else{
        //NOW we can search if class exist or not 
        const SearchClassBycode = await getClassById(class_id);
        
        if(!SearchClassBycode){
            return {ClassNotFound: "* Their is no class with this code" };

        }else{
            //Add the user as a student
            const user = await GetUser();
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
                return {JoinError:"You already joined the class"}
            }else{

                return {succes:"You Joined the class Succefully !"}
                
            }
        }
    }

}