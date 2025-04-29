import { StudentTable } from "@/components/class/StudentTable";
import { GetStudents } from "@/utils/student";
import { Student } from "@/utils/types";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  const Students = await GetStudents(classId);

  return (
    <div className="p-3">
      <StudentTable data={Students as Student[]} />
    </div>
  );
}
