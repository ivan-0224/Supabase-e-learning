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
import { Quitclass } from "@/actions/QuitClass";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";

export default function ConfirmQuiting({ classId }: { classId: string }) {
  const [state, action, pending] = useActionState(
    (state: any, formData: FormData) => Quitclass(state, formData, classId),
    undefined
  );

  useEffect(() => {
    if (state?.error) {
      toast.warning(state.error, {
        position: "top-center",
        style: { backgroundColor: "#ead009", color: "white" },
      });
    } else if (state?.succes) {
      toast.success(state.succes, {
        position: "top-center",
        style: { backgroundColor: "#4CAF50", color: "white" },
      });
      window.location.reload();
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger className="w-full outline-1 p-2 rounded-md text-sm font-semibold cursor-pointer hover:bg-black/5 transition-all">
        Quit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure ⁉️ </DialogTitle>
          <DialogDescription>
            This will permanently delete your from this class and remove all
            your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" className="cursor-pointer">
              Close
            </Button>
          </DialogClose>
          <form action={action}>
            <Button
              disabled={pending}
              type="submit"
              className=" cursor-pointer"
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
