import { DocTable } from "@/components/class/DocTable";
import { getAllTdDocuments } from "@/utils/docs";
import { Doc } from "@/utils/types";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  //Get td documents
  const docs = await getAllTdDocuments(classId as string);
  return (
    <div>
      <DocTable data={docs as Doc[]} />
    </div>
  );
}
