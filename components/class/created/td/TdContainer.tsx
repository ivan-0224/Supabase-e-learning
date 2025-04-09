import React from "react";
import TdCard from "./TdCard";
import CreateTdPrompt from "./CreateTdPrompt";

export default function TdContainer() {
  return (
    <div className="p-2 space-y-3">
      <CreateTdPrompt />
      <TdCard />
    </div>
  );
}
