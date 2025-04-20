import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import CourseContainer from "@/components/class/created/cours/CourseContainer";
import TdContainer from "@/components/class/created/td/TdContainer";
import { getCourses } from "@/utils/course";
import { getTDs } from "@/utils/TD";

export default async function page({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  //Get courses
  const courses = await getCourses(classId as string);

  //Get Tds
  const TDs = await getTDs(classId);

  return (
    <div>
      <Tabs defaultValue="Course" className="w-full ">
        <TabsList className="w-full  rounded-none">
          <TabsTrigger value="Course" className=" cursor-pointer">
            Course
          </TabsTrigger>
          <TabsTrigger value="Td" className=" cursor-pointer">
            Td
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Course">
          <CourseContainer Courses={courses} />
        </TabsContent>
        <TabsContent value="Td">
          <TdContainer tds={TDs} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
