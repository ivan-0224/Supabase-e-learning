import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Document from "../Document";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CommentContainer from "../CommentContainer";

export default function TdCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className="border p-2 rounded-md shadow w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className=" cursor-pointer">
          <div className="flex flex-col">
            <span className="font-semibold text-lg">TD Name</span>
            <span className="text-gray-500">Created at : </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className=" space-y-3">
          <p>TD for haaaaaaaaaa </p>
          <p className=" font-semibold">Documents :</p>
          <div className="flex gap-2 overflow-x-auto">
            <Document />
            <Document />
            <Document />
          </div>
          <form action="" className="p-1 flex gap-1 items-center">
            <Input placeholder="add a comment..." />
            <Button>Add</Button>
          </form>
          <p className="font-semibold">comments:</p>
          <CommentContainer />
          <form className="w-full">
            <Button
              className=" float-right cursor-pointer"
              variant="destructive"
            >
              Delete Course
            </Button>
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
