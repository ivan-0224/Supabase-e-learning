import { User } from "@supabase/supabase-js";
import { createClient } from "./supabase/server";

export const AddStudent = async(user:User|null)=>{

    const supabase = await createClient();
    await supabase.from("student").insert([
        {
            student_id:user?.id as string,
            student_name:user?.user_metadata.full_name as string,
            student_mail:user?.email as string,
        }
    ])
}