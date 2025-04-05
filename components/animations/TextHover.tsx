import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TooltipProps = {
  children: React.ReactNode;
  text: string;
};

export default function TextHover({ children, text }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <div>{text}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
