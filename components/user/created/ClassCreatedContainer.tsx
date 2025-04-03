"use client";
import React, { useEffect, useState } from "react";
import { getCreatedClass } from "@/utils/getclass";

import { ClassCreatedScketon } from "./ClassCreatedScketon";
import { GetUser } from "@/utils/getuser";
import { User } from "@supabase/supabase-js";

const ClassCreatedCard = React.lazy(() => import("./ClassCreatedCard"));

export default function ClassCreatedContainer() {
  const [classes, setClasses] = useState<any[]>([]);
  const [teacher, setTeacher] = useState<User>();

  useEffect(() => {
    //get teacher
    const GetTeacher = async () => {
      const teacher = await GetUser();
      if (teacher) {
        setTeacher(teacher);
      }
    };
    GetTeacher();
    //Get classes
    const GetClasses = async () => {
      const Classes = await getCreatedClass();
      if (Classes) {
        setClasses(Classes);
      }
    };
    GetClasses();
  }, []);

  return (
    <section className="p-2 flex  gap-15 md:flex-row lg:items-stretch lg:justify-normal md:items-center md:justify-center md:flex-wrap flex-col">
      {classes.map((Class) => (
        <React.Suspense
          key={Class.class_id}
          fallback={<ClassCreatedScketon key={Class.class_id} />}
        >
          <div key={Class.class_id}>
            <ClassCreatedCard
              Class={{
                classname: Class.class_name,
                description: Class.description,
                major: Class.major,
                classcode: Class.class_id,
              }}
              Teacher={{
                teachername: teacher?.user_metadata.full_name as string,
                teachermail: teacher?.email as string,
              }}
            />
          </div>
        </React.Suspense>
      ))}
    </section>
  );
}
