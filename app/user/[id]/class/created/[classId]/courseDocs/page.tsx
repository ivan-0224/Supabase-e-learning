import { DocTable } from "@/components/class/DocTable";
import { getAllCoursesDocuments } from "@/utils/docs";
import { Doc } from "@/utils/types";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;

  const docs = await getAllCoursesDocuments(classId);
  return (
    <div className="p-2">
      <p>Courses Documents</p>
      <DocTable data={docs as Doc[]} />
    </div>
  );
}
