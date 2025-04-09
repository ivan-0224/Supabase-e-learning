import React from "react";
import CreateCoursePrompt from "./CreateCoursePrompt";
import CourseCard from "./CourseCard";

export default function CourseContainer() {
  return (
    <div className="p-2 space-y-3">
      <CreateCoursePrompt />

      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}
