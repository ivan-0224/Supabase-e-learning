"use server"

import { createClient } from "./supabase/server"
import { CourseDoc, Doc, TdDoc } from "./types";

export const findDocByHashCode = async (code:string)=>{
    const supabase = await createClient();

    const {data, error} = await supabase.from("document").select('*').eq("hash_value" , code)
    if(!error){
        return data as Doc[]
    }else{
        throw(error)
    }
}

export const addDocument = async (doc:Doc[])=>{
    const supabase = await createClient();
    const {data,error} = await supabase.from("document").insert(doc).select()
    if(error){
        throw error
    }
    if(data){

        return data as Doc[]
    }
}

export const addCourseDoc = async(courseId:string, docId:string)=>{
    const supabase = await createClient();
    const {error} = await supabase.from("CourseDocument").insert([{course_id:courseId, doc_id:docId}])
    if(error){
        console.log(error)
        return false
    }
    return true
}


export const getDocument = async (docId:string)=>{
    const supabase = await createClient();
    const doc = await supabase.from("document").select("*").eq("doc_id", docId).single()
    if (doc){
        return doc.data as Doc
    }

}


export const getCrouseDocuments = async (courseId:string)=>{
    const supabase = await createClient();
    const {data, error} = await supabase.from("CourseDocument").select("*").eq("course_id", courseId).order("created_at", {ascending:false})

    if(data){
        const courseDocs = data as CourseDoc[]
        const Docs = await Promise.all( courseDocs.map(async (courseDoc)=>{
            const docId = courseDoc.doc_id as string
            const doc = await getDocument(docId)
            if(doc){
                return doc
            }
        }))
        if(Docs){
            return Docs as Doc[]
        }
    }

}


export const getTdDocuments = async (tdId:string)=>{
    const supabase = await createClient();
    const {data, error} = await supabase.from("TdDocument").select("*").eq("td_id", tdId).order("created_at", {ascending:false})

    if(data){
        const courseDocs = data as TdDoc[]
        const Docs = await Promise.all( courseDocs.map(async (courseDoc)=>{
            const docId = courseDoc.doc_id as string
            const doc = await getDocument(docId)
            if(doc){
                return doc
            }
        }))
        if(Docs){
            return Docs as Doc[]
        }
    }
    if(error){
        throw error
    }

}