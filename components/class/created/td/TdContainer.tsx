import React from "react";
import TdCard from "./TdCard";
import CreateTdPrompt from "./CreateTdPrompt";

export default function TdContainer() {
  return (
    <div className="p-2  flex items-center justify-center flex-col gap-2.5 w-full">
      <CreateTdPrompt />
      <TdCard />
    </div>
  );
}
