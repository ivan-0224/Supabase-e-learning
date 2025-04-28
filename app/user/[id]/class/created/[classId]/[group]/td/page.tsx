import SubmissionCard from "@/components/class/created/groups/SubmissionCard";
import { getTDs } from "@/utils/TD";
import { Course } from "@/utils/types";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  //Get All td
  const Tds = await getTDs(classId);

  return (
    <div className="p-3 space-y-2 ">
      <p>TD submissions</p>
      {Tds?.length === 0 && (
        <p className="text-center text-gray-500">There is no TD for now ☹️</p>
      )}
      {Tds?.map((td) => (
        <SubmissionCard Td={td as Course} key={td.course_id} />
      ))}
    </div>
  );
}
