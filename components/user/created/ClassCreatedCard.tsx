import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ClassCreatedCard() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>
          <span>Class Name</span>
        </CardTitle>
        <CardDescription>Teacher name : </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
