import React from "react";
import { DonutChart } from "../../DonutChart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SubmissionCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className=" shadow-md inset-shadow-2xs p-2 rounded-md dark:border"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer">
          <div className="p-1 ">
            <h1 className=" text-lg">Td Name</h1>
            <span className=" p-1 text-sm text-gray-500">created at : </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className=" space-y-2">
          <DonutChart />
          <div className="p-2">
            <p className=" underline ">Students Submissions :</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
