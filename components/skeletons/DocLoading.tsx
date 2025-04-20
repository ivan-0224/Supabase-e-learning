import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function DocLoading() {
  return (
    <div className="flex gap-1.5 w-full">
      <Skeleton className="w-[100px] h-[50px]" />

      <div className="flex gap-2.5 flex-col w-full">
        <Skeleton className="h-2.5 w-full" />
        <Skeleton className="h-2.5 w-full" />
      </div>
    </div>
  );
}
