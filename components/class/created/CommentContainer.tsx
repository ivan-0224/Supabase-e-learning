import { AvatarIcon } from "@/components/AvatarIcon";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function CommentContainer() {
  return (
    <div className="flex flex-col">
      <ScrollArea className="h-25">
        <div className="p-1">
          <div className="flex items-center gap-1.5">
            <AvatarIcon img="" />
            <span>User</span>
            <span className="text-gray-500">created at:</span>
          </div>
          <p className="p-2">comment</p>
        </div>
        <div className="p-1">
          <div className="flex items-center gap-1.5">
            <AvatarIcon img="" />
            <span>User</span>
            <span className="text-gray-500">created at:</span>
          </div>
          <p className="p-2">comment</p>
        </div>
      </ScrollArea>
    </div>
  );
}
