import React from "react";
import CreateClassPrompt from "./CreateClassPrompt";
import ClassCreatedContainer from "./ClassCreatedContainer";

export default async function CreatedClass({ id }: { id: string | undefined }) {
  return (
    <div className="p-2 flex flex-col gap-3 w-full">
      <nav className="w-full flex items-center justify-center">
        <CreateClassPrompt />
      </nav>
      <ClassCreatedContainer userId={id} />
    </div>
  );
}
