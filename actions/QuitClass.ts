"use server"

import { GetUser } from "@/utils/getuser";
import { createClient } from "@/utils/supabase/server"

export const Quitclass = async(state:any, formdata:FormData, classId:string)=>{
    const supabase = await createClient();
    const user = await GetUser();

    
    //Quit the class
    //Delete the user from the StudentClass with the given classId
    const {error} = await supabase.from("studentClass").delete().eq("student_id",user?.id).eq("class_id", classId)
    if(error){
        return {error:error.message}
    }else{
        return{succes:"You Quit the Class Succefuly"}
    }

}