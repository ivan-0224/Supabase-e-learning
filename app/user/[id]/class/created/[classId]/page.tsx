import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import CourseContainer from "@/components/class/created/cours/CourseContainer";
import TdContainer from "@/components/class/created/td/TdContainer";

export default async function page() {
  return (
    <div>
      <Tabs defaultValue="Course" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="Course" className=" cursor-pointer">
            Course
          </TabsTrigger>
          <TabsTrigger value="Td" className=" cursor-pointer">
            Td
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Course">
          <CourseContainer />
        </TabsContent>
        <TabsContent value="Td">
          <TdContainer />
        </TabsContent>
      </Tabs>
    </div>
  );
}
