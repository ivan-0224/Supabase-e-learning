"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CommentContainer from "../CommentContainer";
import { Course, Doc } from "@/utils/types";
import { formatDate } from "@/utils/date";
import { getDocuments } from "@/utils/docs";
import { Skeleton } from "@/components/ui/skeleton";
import DocLoading from "@/components/skeletons/DocLoading";
const Document = React.lazy(() => import("../Document"));

export default function CourseCard({ course }: { course: Course }) {
  const date = new Date(course.created_at as string);
  const DATE = formatDate(date);
  const [docs, setDocs] = useState<Doc[]>([]);
  //GET DOCUMENTS
  useEffect(() => {
    const GetDocs = async () => {
      const Docs = await getDocuments(course.course_id as string);
      setDocs(Docs as Doc[]);
    };
    GetDocs();
  }, []);

  return (
    <Accordion
      type="single"
      collapsible
      className="border p-2 rounded-md shadow w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className=" cursor-pointer">
          <div className="flex flex-col">
            <span className="font-semibold text-xl capitalize">
              {course.course_name}
            </span>
            <span className="text-gray-500">Created at : {DATE} </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className=" space-y-3">
          <p className="text-lg">{course.course_descriptions} </p>
          <p className=" font-semibold text-xl">Documents :</p>
          {/* DOCUMENTS */}
          <div className="flex gap-2 flex-col overflow-y-auto group">
            {docs ? (
              docs.map((doc) => (
                <React.Suspense key={doc?.doc_id} fallback={<DocLoading />}>
                  <Document document={doc} key={doc?.doc_id} />
                </React.Suspense>
              ))
            ) : (
              <DocLoading />
            )}
          </div>

          <form action="" className="p-1 flex gap-1 items-center">
            <Input placeholder="add a comment..." />
            <Button>Add</Button>
          </form>
          <p className="font-semibold">comments:</p>
          <CommentContainer />
          <form className="w-full">
            <Button
              className=" float-right cursor-pointer"
              variant="destructive"
            >
              Delete Course
            </Button>
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
