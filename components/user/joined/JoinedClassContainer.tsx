import { ClassLoading } from "@/components/skeletons/ClassLoading";
import React from "react";

const ClassJoinedCard = React.lazy(() => import("./ClassJoinedCard"));

export default function JoinedClassContainer({
  classes,
}: {
  classes: Class[];
}) {
  return (
    <section className="p-2 flex  gap-15 md:flex-row lg:items-stretch lg:justify-normal md:items-center md:justify-center md:flex-wrap flex-col">
      {classes.map((Class) => (
        <React.Suspense key={Class.class_id} fallback={<ClassLoading />}>
          <ClassJoinedCard Class={Class} />
        </React.Suspense>
      ))}
    </section>
  );
}
