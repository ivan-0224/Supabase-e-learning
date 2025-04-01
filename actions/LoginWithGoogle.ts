"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"


export const LoginWithGoogle = async (state:any, formData:FormData)=>{
    const supabase = await createClient()
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
              },
            redirectTo: 'http://localhost:3000/api/auth/callback',
          },
      })
      if (data.url) {   
        redirect(data.url) // use the redirect API for your server framework
      }else{
        return {error:"Server Ereur Try another time"}
      }

}