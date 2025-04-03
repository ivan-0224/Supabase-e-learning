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
import ConfirmDelete from "./ConfirmDelete";
import { GetUser } from "@/utils/getuser";
import { User } from "@supabase/supabase-js";
import { Skeleton } from "@/components/ui/skeleton";

interface Class {
  classname: string;
  description: string;
  major: string;
  classcode: string;
}

export default function ClassCreatedCard({ Class }: { Class: Class }) {
  const [showPassword, setShowPassword] = useState(false);
  const [teacher, setTeacher] = useState<User>();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //Get the teacher informations
  useEffect(() => {
    const GetTeacher = async () => {
      const teacher = await GetUser();
      if (teacher) {
        setTeacher(teacher);
      }
    };
    GetTeacher();
  }, []);
  return (
    <Card className="md:w-[400px] space-y-2">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="text-2xl capitalize">{Class.classname}</span>
          <Badge variant="secondary" className="bg-blue-300 text-white">
            {Class.major}
          </Badge>
        </CardTitle>
        <CardDescription className="space-y-2">
          <div className="text-md flex items-center underline">
            👨‍🏫 Teacher :{" "}
            <div className=" text-sm select-all text-black/50 capitalize">
              {teacher?.user_metadata.full_name ? (
                teacher?.user_metadata?.full_name
              ) : (
                <Skeleton className="w-7 inline h-3.5" />
              )}
            </div>
          </div>

          <p className="text-md underline">
            📨 Mail :{" "}
            <span className=" text-sm select-all text-black/50 ">
              {teacher?.email}
            </span>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <span className="text-lg font-semibold select-none text-nowrap">
          {" "}
          Code :{" "}
        </span>
        {showPassword ? (
          <span className="text-sm text-black/50 select-all text-nowrap overflow-hidden">
            {Class.classcode}
          </span>
        ) : (
          <span className="text-sm text-black/50">.....................</span>
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
          <Link href={""}>Enter</Link>
        </Button>
        <ConfirmDelete />
      </CardFooter>
    </Card>
  );
}
