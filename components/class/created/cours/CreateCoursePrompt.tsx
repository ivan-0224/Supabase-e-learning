import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "../../FileUploader";
import { Button } from "@/components/ui/button";

export default function CreateCoursePrompt() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-1 cursor-pointer outline p-2 rounded-md bg-blue-400 text-white hover:cursor-pointer text-sm">
        Create a course <Plus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new Course</DialogTitle>
          <DialogDescription>
            please fill the fileds to create your course
          </DialogDescription>
        </DialogHeader>
        <form action="" className=" space-y-2">
          <Label htmlFor="">Course Name 🤔:</Label>
          <Input placeholder="type your course name" required />
          <Label htmlFor="">Course Description 📝:</Label>
          <Textarea placeholder="type your course name" required />
          <Label>
            Documents:<span className=" text-gray-500">(optional)</span>
          </Label>
          <FileUploader />
          <Button className="w-full">Create</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
