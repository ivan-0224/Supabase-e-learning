"use client";
import React, { useActionState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { DeleteCreatedClass } from "@/actions/DeleteClass";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";

export default function ConfirmDelete({ classId }: { classId: string }) {
  const [state, formAction, pending] = useActionState(
    (state: any, formData: FormData) =>
      DeleteCreatedClass(state, formData, classId),
    undefined
  );
  useEffect(() => {
    if (state?.error) {
      toast.error(state.error, {
        duration: 3000, // Display duration in ms
        position: "top-center", // Position of the toast
        style: { background: "red", color: "#fff", border: "none" },
      });
    } else if (state?.succes) {
      window.location.reload();
      toast.success(state.succes, {
        duration: 3000, // Display duration in ms
        position: "top-center", // Position of the toast
        style: { background: "#4CAF50", color: "#fff", border: "none" }, // Custom styles});
      });
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger className="w-full bg-white outline  text-black p-2 rounded-md text-sm font-semibold cursor-pointer hover:bg-red-400/90 hover:outline-none hover:text-white transition-all">
        Delete
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure ⁉️ </DialogTitle>
          <DialogDescription>
            This will permanently delete your this class and remove his data
            from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
          <form action={formAction}>
            <Button
              type="submit"
              className=" cursor-pointer w-full"
              disabled={pending}
            >
              {pending ? (
                <ClipLoader
                  color="#ffffff"
                  cssOverride={{}}
                  loading
                  size={20}
                  speedMultiplier={2}
                />
              ) : (
                <span>Confirm</span>
              )}
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
