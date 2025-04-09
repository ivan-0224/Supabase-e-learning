import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function Document() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className=" border border-blue-500 w-fit cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all p-2 ">
          Document1.pdf
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className=" cursor-pointer">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
