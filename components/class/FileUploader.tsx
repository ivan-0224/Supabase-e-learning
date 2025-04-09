"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

export function FileUploader() {
  // Define the files state with type File[]
  const [files, setFiles] = useState<File[]>([]);

  // Declare onDrop with the type of acceptedFiles as an array of File objects.
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
}
