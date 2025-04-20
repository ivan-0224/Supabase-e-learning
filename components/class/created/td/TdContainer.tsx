import React from "react";
import TdCard from "./TdCard";
import CreateTdPrompt from "./CreateTdPrompt";
import { TD } from "@/utils/types";

export default function TdContainer({ tds }: { tds: TD[] | null | undefined }) {
  return (
    <div className="p-4 flex items-center justify-center flex-col gap-5">
      <CreateTdPrompt />
      {tds?.length != 0 ? (
        tds?.map((td) => <TdCard td={td} key={td.td_id} />)
      ) : (
        <p className="text-gray-500 text-sm text-center pt-2.5">
          Create Your first TD So you can start 🧐
        </p>
      )}
    </div>
  );
}
