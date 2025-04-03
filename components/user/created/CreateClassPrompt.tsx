"use client";
import React, { useActionState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { CreateClass } from "@/actions/CreateClass";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

export default function CreateClassPrompt() {
  const [state, action, pending] = useActionState(CreateClass, undefined);
  //Handle Errors
  useEffect(() => {
    if (state?.success) {
      window.location.reload();
      toast.success(state.success, {
        duration: 3000, // Display duration in ms
        position: "top-center", // Position of the toast
        style: { background: "#4CAF50", color: "#fff", border: "none" }, // Custom styles});
      });
    } else if (state?.error) {
      toast.error("Fields Errors", {
        duration: 3000, // Display duration in ms
        position: "top-center", // Position of the toast
        style: { background: "#ff3d3d", color: "#fff", border: "none" }, // Custom styles});
      });
    } else if (state?.ServerError) {
      toast.error(state.ServerError, {
        duration: 3000, // Display duration in ms
        position: "top-center", // Position of the toast
        style: { background: "#ff3d3d", color: "#fff", border: "none" }, // Custom styles});
      });
    }
  }, [state]);
  return (
    <nav className="w-full flex items-center justify-center">
      <Drawer>
        <DrawerTrigger className=" flex items-center gap-1 outline outline-blue-400 ring-blue-600 p-2 font-semibold text-sm bg-blue-400 drop-shadow-sm text-white rounded-md w-fit cursor-pointer ">
          Add a class <Plus className="size-5" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Your class ✍️</DrawerTitle>
            <DrawerDescription>
              Fill the fields to create your class.
            </DrawerDescription>
          </DrawerHeader>
          <form action={action} className="p-5 space-y-2 drop-shadow-md ">
            <Label>ClassName 🤔 :</Label>
            <Input placeholder="type your class name" name="className" />
            {state?.error?.className && (
              <p className="text-sm text-red-400">{state.error.className}</p>
            )}
            <Label>Major 🏳 :</Label>
            <Input placeholder="exemple : 2BI" name="Major" />
            {state?.error?.Major && (
              <p className="text-sm text-red-400">{state.error.Major}</p>
            )}
            <Label>
              Description 📝 :{" "}
              <span className="text-sm text-gray-400">(optional)</span>
            </Label>
            <Textarea placeholder="description if u want" name="Desc" />
            {state?.error?.Description && (
              <p className="text-sm text-red-400">{state.error.Description}</p>
            )}
            <DrawerFooter>
              <Button className="cursor-pointer" disabled={pending}>
                {pending ? (
                  <ClipLoader
                    color="#ffffff"
                    cssOverride={{}}
                    loading
                    size={20}
                    speedMultiplier={2}
                  />
                ) : (
                  <span>Create </span>
                )}
              </Button>
              <DrawerClose className="outline p-1 cursor-pointer hover:bg-black/5 ">
                Cancel
              </DrawerClose>
            </DrawerFooter>{" "}
          </form>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
