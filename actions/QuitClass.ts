"use server"

import { GetUser } from "@/utils/getuser";
import { deleteStudentFromGrp } from "@/utils/group";
import { createClient } from "@/utils/supabase/server"
import { User } from "@supabase/supabase-js";

export const Quitclass = async(state:any, formdata:FormData, classId:string)=>{
    const supabase = await createClient();
    const user = await GetUser();
    
    //Quit the class
    //Delete the user from the StudentClass with the given classId
    const {error} = await supabase.from("studentClass").delete().eq("student_id",user?.id).eq("class_id", classId)
    if(error){
        return {error:error.message}
    }else{
        //Delete the user from the student group table
        await deleteStudentFromGrp(classId, user as User)
        return{succes:"You Quit the Class Succefuly"}
    }



}