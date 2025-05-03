import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { FileUploader } from "../FileUploader";

import { SelectStudents } from "./SelectStudents";
import { ArrowDownToLine } from "lucide-react";
import { Student } from "@/utils/types";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function SubmissionForm() {
  //GET STUDENTS
  const people: Student[] = [
    {
      student_id: "1",
      student_name: "John Doe",
      student_mail: "john@example.com",
    },
    {
      student_id: "2",
      student_name: "Jane Smith",
      student_mail: "jane@example.com",
    },
    {
      student_id: "3",
      student_name: "Bob Johnson",
      student_mail: "bob@example.com",
    },
    {
      student_id: "4",
      student_name: "Alice Brown",
      student_mail: "alice@example.com",
    },
    {
      student_id: "5",
      student_name: "Charlie Davis",
      student_mail: "charlie@example.com",
    },
  ];

  return (
    <Drawer>
      <DrawerTrigger className="text-sm flex items-center gap-1.5 item border   my-2 p-1 px-3 rounded-md cursor-pointer hover:scale-102 focus:scale-98 transition-all hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white">
        Submit Your Work
        <ArrowDownToLine />
      </DrawerTrigger>

      <DrawerContent className="p-5">
        {" "}
        <DrawerHeader>
          <DrawerTitle>Work submition🎖️</DrawerTitle>
          <DrawerDescription>Please Fill those filds ✏️</DrawerDescription>
          <Separator />
        </DrawerHeader>
        <form className="h-[40svh] overflow-y-scroll">
          <div className="flex flex-col gap-2 ">
            <Label className="text-lg">📚 Document :</Label>
            <FileUploader />
          </div>
          <Separator />

          <div className="flex flex-col gap-2">
            <Label className="text-lg">
              Description:
              <span className="text-sm text-gray-600 animate-pulse">
                (optional)
              </span>
            </Label>
            <Textarea placeholder="Add A description for your submission if u want" />
          </div>
          <Separator />

          <div className="flex flex-col gap-2 w-full">
            <Label className="text-xl ">
              Add Persons that worked with you in this project:
              <span className="text-sm text-gray-600 animate-pulse">
                (optional)
              </span>
            </Label>
            <SelectStudents people={people as Student[]} />
          </div>
          <Separator />
        </form>
        <DrawerFooter className="border-t-black/40 border-t-[1px]">
          <Button className="">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
