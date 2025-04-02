import React from "react";
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

export default function ConfirmDelete() {
  return (
    <Dialog>
      <DialogTrigger>
        <span className=" bg-red-400 p-2.5 outline-red-100 hover:opacity-75 transition-all rounded-md text-white px-2 font-semibold text-sm cursor-pointer">
          Delete
        </span>
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
          <Button type="submit" className=" cursor-pointer">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
