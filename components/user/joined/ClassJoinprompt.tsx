"use client";
import React, { useActionState, useEffect } from "react";
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
import { JoinClass } from "@/actions/JoinClass";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ClassJoinprompt() {
  const [state, action, pending] = useActionState(JoinClass, undefined);

  useEffect(() => {
    if (state?.JoinError) {
      toast.warning(state.JoinError, {
        position: "top-center",
        style: { backgroundColor: "#ead009", color: "white" },
      });
    } else if (state?.succes) {
      toast.success(state.succes, {
        position: "top-center",
        style: { backgroundColor: "#4CAF50", color: "white" },
      });
      window.location.reload();
    } else if (state?.TeacherWarent) {
      toast.warning(state.TeacherWarent, {
        position: "top-center",
        style: { backgroundColor: "#ead009", color: "white" },
      });
    }
  }, [state]);

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
        <form action={action} className="space-y-3">
          <Label>Class-Code 🔐 :</Label>
          <div>
            <Input
              placeholder="code:xxxx-xxxx-xxxx-xxxxxxxxxxxx."
              name="classCode"
              required
              disabled={pending}
            />
            {state?.invalidCode && (
              <span className="text-sm text-red-400">{state.invalidCode}</span>
            )}

            {state?.ClassNotFound && (
              <span className="text-sm text-red-400">
                {state.ClassNotFound}
              </span>
            )}
          </div>
          <Label>Choose a group 🏫 :</Label>
          <Select required name="groupe">
            <SelectTrigger className="w-[180px] ">
              <SelectValue placeholder="choose a group" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup aria-required>
                <SelectLabel>Groups</SelectLabel>
                <SelectItem
                  value="1"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 1
                </SelectItem>
                <SelectItem
                  value="2"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 2
                </SelectItem>
                <SelectItem
                  value="3"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 3
                </SelectItem>
                <SelectItem
                  value="4"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 4
                </SelectItem>
                <SelectItem
                  value="5"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 5
                </SelectItem>
                <SelectItem
                  value="6"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 6
                </SelectItem>
                <SelectItem
                  value="7"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 7
                </SelectItem>
                <SelectItem
                  value="8"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 8
                </SelectItem>
                <SelectItem
                  value="9"
                  className=" cursor-pointer transition-all hover:border"
                >
                  Group 9
                </SelectItem>
                <SelectItem
                  value="10"
                  className=" cursor-pointer transition-all  hover:border"
                >
                  Group 10
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button className=" w-full bg-blue-400 cursor-pointer text-white hover:text-black">
            {pending ? <ClipLoader size={17} color="white" /> : "Join"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
