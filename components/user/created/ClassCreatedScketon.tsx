import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function ClassCreatedScketon() {
  return (
    <div className=" mx-1.5 flex items-center md:w-[400px] h-[310px] flex-col space-y-14">
      <div className="w-full space-y-2">
        <Skeleton className="h-[50px] w-full rounded-xl" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>

      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
