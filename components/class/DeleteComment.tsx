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
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";

import { Trash } from "lucide-react";
import { deleteComment } from "@/actions/Courses/deleteComment";

export default function DeleteComment({ CommentId }: { CommentId: string }) {
  const [state, formAction, pending] = useActionState(
    (state: any, formData: FormData) =>
      deleteComment(state, formData, CommentId),
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
      toast.success(state.succes, {
        duration: 3000, // Display duration in ms
        position: "top-center", // Position of the toast
        style: { background: "#4CAF50", color: "#fff", border: "none" }, // Custom styles});
      });
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger className="outline p-2 hover:opacity-70 rounded-md cursor-pointer hover:scale-105 focus:scale-95 mr-2.5">
        <Trash className=" size-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure ⁉️ </DialogTitle>
          <DialogDescription>
            This will permanently delete your comment.
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
              className=" cursor-pointer w-full dark:bg-red-400 dark:text-white"
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
