import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export default function ClassJoinprompt() {
  return (
    <Dialog>
      <div className="w-full flex items-center justify-center">
        <DialogTrigger className="flex items-center ring-blue-500  gap-2 cursor-pointer hover:scale-105 transition text-sm font-semibold  p-2 rounded-md bg-blue-400 text-white">
          Join a class <LogIn />
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>🎯 Join a class</DialogTitle>
          <DialogDescription>
            Just enter the code that you got from you teacher
          </DialogDescription>
        </DialogHeader>
        <form action="" className="space-y-3">
          <Label>Class-Code 🔐 :</Label>
          <Input placeholder="code:xxxx-xxxx-xxxx-xxxxxxxxxxxx." />
          <Button className=" w-full bg-blue-400 cursor-pointer">Join</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
