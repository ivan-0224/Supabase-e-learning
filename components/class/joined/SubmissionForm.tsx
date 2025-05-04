"use client";
import React, { useEffect, useState } from "react";
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
import { GetStudents } from "@/utils/student";

export default function SubmissionForm({ tdId }: { tdId: string }) {
  const [students, setStudents] = useState<Student[]>([]);

  //GET STUDENTS
  useEffect(() => {
    const getStds = async () => {
      const Students = await GetStudents(tdId);

      setStudents(Students as Student[]);
    };
    getStds();
  }, []);

  return (
    <Drawer>
      <DrawerTrigger className="text-sm flex items-center gap-1.5 item border   my-2 p-1 px-3 rounded-md cursor-pointer hover:scale-102 focus:scale-98 transition-all hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white">
        Submit Your Work
        <ArrowDownToLine />
      </DrawerTrigger>

      <DrawerContent className="p-5">
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
            {students.length === 0 ? (
              "loAFIND"
            ) : (
              <SelectStudents people={students} />
            )}
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
