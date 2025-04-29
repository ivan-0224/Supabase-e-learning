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

          <Button className=" w-full bg-blue-400 cursor-pointer">
            {pending ? <ClipLoader size={17} color="white" /> : "Join"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
