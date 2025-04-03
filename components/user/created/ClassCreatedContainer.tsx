import React from "react";
import { ClassCreatedScketon } from "./ClassCreatedScketon";
import { User } from "@supabase/supabase-js";

const ClassCreatedCard = React.lazy(() => import("./ClassCreatedCard"));

function ClassCreatedContainer({
  user,
  classes,
}: {
  user: User;
  classes: Class[];
}) {
  return (
    <section className="p-2 flex gap-15 md:flex-row lg:items-stretch lg:justify-normal md:items-center md:justify-center md:flex-wrap flex-col">
      {classes.map((Class) => (
        <React.Suspense
          key={Class.class_id}
          fallback={<ClassCreatedScketon key={Class.class_id} />}
        >
          <div key={Class.class_id}>
            <ClassCreatedCard
              key={Class.class_id}
              Class={{
                class_name: Class.class_name,
                description: Class.description,
                major: Class.major,
                class_id: Class.class_id,
              }}
              Teacher={{
                teachername: user?.user_metadata.full_name as string,
                teachermail: user?.email as string,
              }}
            />
          </div>
        </React.Suspense>
      ))}
    </section>
  );
}
export default React.memo(ClassCreatedContainer);
