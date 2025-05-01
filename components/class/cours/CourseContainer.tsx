"use client";
import React from "react";
import CreateCoursePrompt from "./CreateCoursePrompt";
import CourseCard from "./CourseCard";
import { Course } from "@/utils/types";

export default function CourseContainer({
  userRole = "teacher",
  Courses,
}: {
  Courses: Course[] | undefined | null;
  userRole?: string;
}) {
  return (
    <div className="p-4 flex items-center justify-center flex-col gap-5">
      {userRole === "teacher" && <CreateCoursePrompt />}

      {Courses?.length != 0 ? (
        Courses?.map((course) => (
          <CourseCard
            userRole={userRole}
            course={course}
            key={course.course_id}
          />
        ))
      ) : (
        <p className="text-gray-500 text-sm text-center pt-2.5">
          There is no courses for now 🧐
        </p>
      )}
    </div>
  );
}
