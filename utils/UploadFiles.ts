import { createClient } from "./supabase/client";

export const UploadFiles = (files: File[])=>{
        const supabase = createClient();
    
    files.map(async (file) => {
        const filePath = `uploads/${Date.now()}_${file.name}`;
  
        //first we need to add the file to the storage of supbase
        const { error } = await supabase.storage
          .from("uploads")
          .upload(filePath, file);
  
        if (error) {
          console.log(error.message);
          return{ErrorMessage:"Eroor in uploading file : " + filePath + " " + error.message}
        } else {
          //if there is no error in the installation of the file in the storage bucket of supabase
          // then we can get  the url and install the file to the documents table
          const {
            data: { publicUrl: publicURL },
          } = supabase.storage.from("uploads").getPublicUrl(filePath);
        }
      });
    
}