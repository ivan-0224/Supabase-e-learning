"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function ShowCode({
  Code,
}: {
  Code: string | null | undefined;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center gap-1.5">
      {showPassword ? (
        <>
          {" "}
          <span className=" block text-sm text-black/50 dark:text-white select-all text-nowrap w-24  overflow-hidden">
            {Code}
          </span>
        </>
      ) : (
        <span className="text-sm text-black/50 dark:text-white w-full">
          .........................
        </span>
      )}
      <Button
        type="button"
        variant="default"
        size="icon"
        onClick={togglePasswordVisibility}
        className="cursor-pointer"
      >
        {showPassword ? (
          <Eye className="h-4 w-4" />
        ) : (
          <EyeOff className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
