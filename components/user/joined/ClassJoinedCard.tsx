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
import { Eye, EyeOff, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConfirmQuiting from "./ConfirmQuiting";

export default function ClassJoinedCard() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //GET TEACHER INFORMATION

  return (
    <Card className="md:w-[400px] space-y-2">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="text-2xl">Math</span>
          <Badge variant="secondary" className="bg-blue-300 text-white">
            Joined
          </Badge>
        </CardTitle>
        <CardDescription className="space-y-2">
          <p className="text-md underline">
            👨‍🏫 Teacher :{" "}
            <span className=" text-sm select-all text-black/50 ">
              bassem samaali
            </span>
          </p>

          <p className="text-md underline">
            📨 Mail :{" "}
            <span className=" text-sm select-all text-black/50 ">
              samaalibassem123@gmail
            </span>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <span className="text-lg font-semibold select-none"> Code : </span>
        {showPassword ? (
          <span className="text-sm text-black/50 select-all">password</span>
        ) : (
          <span className="text-sm text-black/50">.....................</span>
        )}
        <Button
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
        <ConfirmQuiting />
      </CardFooter>
    </Card>
  );
}
