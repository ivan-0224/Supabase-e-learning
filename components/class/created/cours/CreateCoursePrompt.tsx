"use client";
import React, { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

export default function CreateCoursePrompt() {
  // Define the files state with type File[]
  const [files, setFiles] = useState<File[]>([]);
  // Declare onDrop with the type of acceptedFiles as an array of File objects.
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const FileUploaderUi = () => {
    return (
      <div>
        <div
          {...getRootProps()}
          className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-[30px] w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {isDragActive
              ? "Drop the files here..."
              : "Drag and drop some files here, or click to select files"}
          </p>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Selected Files:</h4>
            <ul className="list-disc pl-5">
              {files.map((file: File) => (
                <li key={file.name} className="text-sm text-gray-600">
                  {file.name} - {(file.size / 1024).toFixed(2)} KB
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  //CREATE A COURSE
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = createClient();
    const PromiseUpload = files.map(async (file) => {
      console.log(file);
      const filePath = `uploads/${Date.now()}_${file.name}`;

      //first we need to add the file to the storage of supbase
      const { error } = await supabase.storage
        .from("uploads")
        .upload(filePath, file);

      if (error) {
        console.log(error.message);
        toast.error(
          "Eroor in uploading file : " + filePath + " " + error.message,
          {
            position: "top-center",
          }
        );
      } else {
        //if there is no error in the installation of the file in the storage bucket of supabase
        // then we can get  the url and install the file to the documents table
        const {
          data: { publicUrl: publicURL },
        } = supabase.storage.from("uploads").getPublicUrl(filePath);
        toast.success(`${file.name} installed succefully`, {
          position: "top-center",
          style: { background: "#4CAF50", color: "#fff", border: "none" },
        });
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1 cursor-pointer outline p-2 rounded-md bg-blue-400 text-white hover:cursor-pointer text-sm">
        Create a course <Plus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Course</DialogTitle>
          <DialogDescription>
            please fill the fileds to create your course
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={HandleSubmit} className=" space-y-2">
          <Label htmlFor="">Course Name 🤔:</Label>
          <Input placeholder="type your course name" required />
          <Label htmlFor="">Course Description 📝:</Label>
          <Textarea placeholder="type your course name" required />
          <Label>
            Documents:<span className=" text-gray-500">(optional)</span>
          </Label>
          {FileUploaderUi()}
          <Button className="w-full cursor-pointer">Create</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
