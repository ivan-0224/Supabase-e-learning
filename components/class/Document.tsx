import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Doc } from "@/utils/types";
import Image from "next/image";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { formatDate } from "@/utils/date";
import { isImageFilename } from "@/utils/utils";

export default function Document({ document }: { document: Doc }) {
  const date = new Date(document?.created_at as string);
  const DATE = formatDate(date);
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link target="_blank" href={document?.doc_url as string}>
          <div className=" cursor-pointer hover:scale-100 group-hover:scale-99  group-hover:opacity-75 hover:opacity-100 transition-all flex items-center border sm:p-2 rounded-lg dark:hover:bg-black/30 hover:shadow-lg  w-full">
            <div className="lg:w-auto flex items-center ">
              {(document?.doc_url as string) &&
              isImageFilename(document.doc_url as string) ? (
                <Image
                  src={document?.doc_url as string}
                  alt="img"
                  width={100}
                  height={100}
                  className="lg:w-auto  rounded-l-lg"
                />
              ) : (
                <div className="p-2">
                  <FileText />
                </div>
              )}
            </div>

            <div className="p-2 text-balance flex flex-col ">
              <div className="text-balance font-semibold sm:text-md ">
                {document?.doc_name as string}
              </div>{" "}
              <div className="text-sm text-gray-500">{DATE}</div>
            </div>
          </div>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className=" cursor-pointer">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
