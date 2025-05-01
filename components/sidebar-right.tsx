import * as React from "react";

import { DatePicker } from "@/components/date-picker";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import ShowCode from "./class/ShowCode";
import { Class, Teacher } from "@/utils/types";

export function SidebarRight({
  classType,
  CLass,
  User,
  teacher,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  classType?: string;
  CLass: Class;
  User: User | null;
  teacher?: Teacher;
}) {
  const ClassType = classType === "td" ? "joined" : "created";
  const USER = {
    name: User?.user_metadata.full_name as string,
    email: User?.email as string,
    avatar: User?.user_metadata.avatar_url as string,
  };

  return (
    <Sidebar
      collapsible="none"
      className=" hidden lg:flex h-screen  sticky top-0  z-200  border-l"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <h1 className="text-black text-xl  p-2 bg-white dark:bg-black rounded-md">
          <div className="flex">
            <span className="font-semibold  dark:text-white">Fsegt</span>
            <span className="text-blue-400 font-semibold">Classroom</span>
          </div>
        </h1>
      </SidebarHeader>
      <SidebarContent className="h-svh">
        <NavUser user={USER} />
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        {ClassType === "joined" && (
          <div className="p-2 flex flex-col gap-1.5">
            <p className=" capitalize font-semibold text-sm ">
              👨‍🏫 : {teacher?.teacher_name}
            </p>
            <p className="text-sm ">📨 : {teacher?.teacher_mail}</p>
          </div>
        )}

        <div className="p-2 flex gap-1.5 items-center">
          <span className="font-semibold text-sm">ClassCode:</span>
          <ShowCode Code={CLass.class_id} />
        </div>

        <SidebarFooter className="flex justify-end  h-full">
          <Button asChild className="text-start">
            <Link href={"/"}>
              Go back To home <LogOutIcon />
            </Link>
          </Button>
        </SidebarFooter>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
