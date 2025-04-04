"use client";
import React, { useEffect, useState } from "react";
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
import ConfirmQuiting from "./ConfirmQuiting";
import { getTeacherById } from "@/utils/teacher";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassJoinedCard({ Class }: { Class: Class }) {
  const [Teacher, setTeacher] = useState<Teacher>();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  console.log(Teacher);
  //GET TEACHER INFORMATION
  useEffect(() => {
    const getTeacher = async () => {
      const teacher = await getTeacherById(Class.teacher_id as string);
      if (teacher) {
        setTeacher(teacher);
      }
    };
    getTeacher();
  }, []);

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
          <div className="text-md underline flex items-end gap-2">
            <span>👨‍🏫 Teacher : </span>
            {!Teacher?.teacher_name ? (
              <Skeleton className="w-[60%] h-3 " />
            ) : (
              <div className=" text-sm select-all text-black/50 ">
                {Teacher?.teacher_mail}
              </div>
            )}
          </div>

          <div className="text-md underline flex items-end gap-2">
            <span className="text-nowrap">📨 Mail : </span>

            {!Teacher?.teacher_mail ? (
              <Skeleton className="w-[60%] h-3 " />
            ) : (
              <div className=" text-sm select-all text-black/50 ">
                {Teacher?.teacher_mail}
              </div>
            )}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <span className="text-lg font-semibold select-none text-nowrap">
          {" "}
          Code :{" "}
        </span>
        {showPassword ? (
          <span className="text-sm text-black/50 select-all overflow-hidden text-nowrap">
            {Class.class_id}
          </span>
        ) : (
          <span className="text-sm text-black/50">.....................</span>
        )}
        <Button
          className="cursor-pointer"
          type="button"
          variant="default"
          size="icon"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-center justify-center">
        <Button asChild variant={"default"} className="cursor-pointer w-full">
          <Link href={""}>Enter</Link>
        </Button>
        <ConfirmQuiting classId={Class.class_id} />
      </CardFooter>
    </Card>
  );
}
