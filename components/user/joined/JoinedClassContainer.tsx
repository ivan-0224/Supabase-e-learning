import React from "react";
import ClassJoinedCard from "./ClassJoinedCard";

export default function JoinedClassContainer() {
  return (
    <section className="p-2 flex  gap-15 md:flex-row lg:items-stretch lg:justify-normal md:items-center md:justify-center md:flex-wrap flex-col">
      <ClassJoinedCard />
      <ClassJoinedCard />
      <ClassJoinedCard />
      <ClassJoinedCard />
    </section>
  );
}
