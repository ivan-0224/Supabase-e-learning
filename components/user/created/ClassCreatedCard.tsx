"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConfirmDelete from "./ConfirmDelete";
import { Class, Teacher } from "@/utils/types";

export default function ClassCreatedCard({
  Class,
  Teacher,
}: {
  Class: Class;
  Teacher: Teacher;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="md:w-[400px] space-y-2">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="flex gap-1  flex-col">
            <span className="text-2xl capitalize">{Class.class_name}</span>
            <span className="text-sm text-gray-400">
              Description:
              {Class.description
                ? Class.description
                : "There is no description"}
            </span>
          </div>
          <div>
            <Badge
              variant="secondary"
              className="bg-blue-300 text-white uppercase"
            >
              {Class.major}
            </Badge>
          </div>
        </CardTitle>
        <CardDescription className="space-y-2">
          <div className="text-md flex items-center underline">
            👨‍🏫 Teacher :{" "}
            <div className=" text-sm select-all text-black/50 dark:text-white capitalize">
              {Teacher.teacher_name}
            </div>
          </div>

          <p className="text-md underline">
            📨 Mail :{" "}
            <span className=" text-sm select-all text-black/50 dark:text-white ">
              {Teacher.teacher_mail}
            </span>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <span className="text-lg font-semibold select-none text-nowrap">
          Code :
        </span>
        {showPassword ? (
          <span className="text-sm text-black/50 dark:text-white select-all text-nowrap overflow-hidden">
            {Class.class_id}
          </span>
        ) : (
          <span className="text-sm text-black/50 dark:text-white">
            .....................
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
      </CardContent>
      <CardFooter className="flex gap-2 items-center justify-center flex-col">
        <Button asChild variant={"default"} className="cursor-pointer w-full">
          <Link href={`${Class.teacher_id}/class/created/${Class.class_id}`}>
            Enter
          </Link>
        </Button>
        <ConfirmDelete classId={Class.class_id} />
      </CardFooter>
    </Card>
  );
}
