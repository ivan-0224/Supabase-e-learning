"use client";
import { AvatarIcon } from "@/components/AvatarIcon";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function StudentSubCard({ tdsubId }: { tdsubId: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/${tdsubId}`}
      className="border w-full group-hover:scale-99 group-hover:opacity-75 hover:opacity-100 hover:scale-100 transition-all hover:shadow-md  p-3 rounded-md flex items-center  gap-2  justify-between"
    >
      <div className="flex items-center gap-1.5">
        <AvatarIcon img="" />
        <p>Student Name</p>
      </div>
      <div className="flex items-start gap-1.5">
        <span className="text-sm text-gray-500 underline">
          See Student Work
        </span>
        <MoveRight />
      </div>
    </Link>
  );
}
