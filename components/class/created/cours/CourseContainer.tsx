import React from "react";
import CreateCoursePrompt from "./CreateCoursePrompt";
import CourseCard from "./CourseCard";
import { Course } from "@/utils/types";

export default function CourseContainer({
  Courses,
}: {
  Courses: Course[] | undefined | null;
}) {
  return (
    <div className="p-2 flex items-center justify-center flex-col gap-2.5 ">
      <CreateCoursePrompt />

      {Courses?.length != 0 ? (
        Courses?.map((course) => (
          <CourseCard course={course} key={course.course_id} />
        ))
      ) : (
        <p className="text-gray-500 text-sm text-center pt-2.5">
          Create Your first Course So you can start 🧐
        </p>
      )}
    </div>
  );
}
