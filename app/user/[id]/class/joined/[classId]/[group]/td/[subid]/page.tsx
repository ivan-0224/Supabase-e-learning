"use client";
import { AvatarIcon } from "@/components/AvatarIcon";
import Document from "@/components/class/Document";
import { Doc } from "@/utils/types";

import React from "react";

export default function page() {
  const doc: Doc = {
    doc_name: "test",
    doc_url: "test",
  };

  return (
    <div className="flex flex-col p-2 gap-3">
      <p></p>
      <div className="flex items-center gap-1.5">
        <AvatarIcon img="" />
        <h1 className="text-lg text-center ">Student Name Submission</h1>
      </div>

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
