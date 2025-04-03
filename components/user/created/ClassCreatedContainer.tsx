"use client";
import React, { useEffect, useState } from "react";
import ClassCreatedCard from "./ClassCreatedCard";
import { getCreatedClass } from "@/utils/getclass";
import { createClient } from "@/utils/supabase/client";
import { ClassCreatedScketon } from "./ClassCreatedScketon";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ClassCreatedContainer({
  userId,
}: {
  userId: string | undefined;
}) {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //Get classes
    const GetClasses = async () => {
      const Classes = await getCreatedClass();
      if (Classes) {
        setClasses(Classes);
      }
    };
    GetClasses();
    setLoading(false);
    // Subscribe to real-time updates for this specific user
    const supabase = createClient();
    const channel = supabase
      .channel("realtime_user")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "class",
          filter: `teacher_id=eq.${userId}`,
        },
        (payload) => {
          console.log("Data changed:", payload);
          setClasses((classes) => [...classes, payload.new as Array<any>]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel); // Clean up on unmount
    };
  }, []);
  if (loading) {
    return (
      <section className="flex gap-15 md:flex-row lg:items-stretch lg:justify-normal md:items-center md:justify-center md:flex-wrap flex-col">
        <ClassCreatedScketon />
        <ClassCreatedScketon />
        <ClassCreatedScketon />
        <ClassCreatedScketon />
      </section>
    );
  }
  console.log(classes);
  return (
    <section className="flex h-svh gap-15 md:flex-row lg:items-stretch lg:justify-normal md:items-center md:justify-center md:flex-wrap flex-col">
      {classes &&
        classes.map((Class) => (
          <div key={Class.class_id}>
            <ClassCreatedCard
              Class={{
                classname: Class.class_name,
                description: Class.description,
                major: Class.major,
                classcode: Class.class_id,
              }}
            />
          </div>
        ))}
    </section>
  );
}
