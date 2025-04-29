import React from "react";
import TdCard from "./TdCard";
import CreateTdPrompt from "./CreateTdPrompt";
import { Course } from "@/utils/types";

export default function TdContainer({
  classType = "created",
  tds,
}: {
  tds: Course[] | null | undefined;
  classType?: string;
}) {
  return (
    <div className="p-4 flex items-center justify-center flex-col gap-5">
      {classType === "created" && <CreateTdPrompt />}
      {tds?.length != 0 ? (
        tds?.map((td) => <TdCard td={td} key={td.course_id} />)
      ) : (
        <p className="text-gray-500 text-sm text-center pt-2.5">
          There is no td for now 🧐
        </p>
      )}
    </div>
  );
}
