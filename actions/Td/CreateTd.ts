"use server"

import { addTD } from '../../utils/TD';
import { addDocument, findDocByHashCode } from '@/utils/docs';
import { createClient } from '@/utils/supabase/server';
import { Doc } from '@/utils/types';
import { z } from "zod";



const TDSchema = z.object(
  {
    tdName: z.string().min(3).trim(),
    tdDescp: z.string().max(30).trim()  
  }
)




export const CreateTd = async(state:any , formdata:FormData, files:Doc[], classID:string)=>{
  const supabase = await createClient();

  console.log(classID)
  const tdName = formdata.get('tdName') as string
  const tdDescp = formdata.get('tdDescp') as string
  const docs = files 

  const ValidFields = TDSchema.safeParse({
    tdName:tdName,
    tdDescp:tdDescp,
  })
  if(!ValidFields.success){
    return {fieldsError: ValidFields.error.flatten().fieldErrors }
  }

  // FIRST : WE ADD THE TD
  const AddCourse= await addTD([{class_id:classID,td_name:tdName, td_description:tdDescp}])


  if(AddCourse){
    var TdId = AddCourse[0].td_id
  }

  // SECOND : IF THE USER ADDED FILES
  // WE ADD THEM TO DOCUMENTS TABLE
  // THAN WE ADD THEM TO THE TD DOCUMENT TABLE
  if(docs){
    docs.map(async (doc)=>{
      const hashCode = doc.hash_value as string
      //If THE hash code of the document doesnt appear in the document table we add the document to the doc table
      const DOC :Doc[]= await findDocByHashCode(hashCode)

      //IF THE DOCUMENT DOESN'T EXIST WE ADD IT TO THE DOCUMENT TABLE
      if(DOC.length === 0){
        const addDoc = await addDocument([doc])
        if (addDoc){
          const docId = addDoc[0].doc_id 
          //ADD THE DOCUMENT TO THE TD DOC TABLE
          const {error} = await supabase.from("TdDocument").insert([{
            td_id:TdId as string,
            doc_id:docId as string
          }])
          if(error){
              return {Error:"Error in Creating Documents try again"}
          }
        };


      }else{
        //ADD THE DOCUMENT TO THE TD DOC TABLE
        const docId = DOC[0].doc_id 
        const {error} = await supabase.from("TdDocument").insert([{
            td_id:TdId as string,
          doc_id:docId as string
        }])
        if(error){
          return {Error:"Error in Creating Documents try again"}
        }
      }
    })
  }

  return {success:"TD Created Succefully !"}
}

