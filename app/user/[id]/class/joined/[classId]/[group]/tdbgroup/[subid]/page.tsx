"use client";
import Document from "@/components/class/Document";
import { StudentTable } from "@/components/class/StudentTable";
import { Doc, Student } from "@/utils/types";

import React from "react";

export default function page() {
  const doc: Doc = {
    doc_name: "test",
    doc_url: "test",
  };

  const students: Student[] = [];

  return (
    <div className="flex flex-col p-2 gap-3">
      <p></p>
      <div className="flex items-center gap-1.5">
        <h1 className="text-lg text-center ">Group Name</h1>
      </div>
      {/* STUDENTS */}
      <p className=" underline">Students That worked in this project:</p>
      <StudentTable data={students} />
      <div className="p-1 flex flex-col gap-3">
        <p className="text-lg  underline">Description:</p>
        <p>there is no description</p>
        <p className="text-lg underline">Documents:</p>
        <div className="flex flex-col gap-3 group">
          <Document document={doc} />
          <Document document={doc} />
          <Document document={doc} />
        </div>
      </div>
    </div>
  );
}
