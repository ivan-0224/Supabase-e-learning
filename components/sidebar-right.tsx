import * as React from "react";

import { DatePicker } from "@/components/date-picker";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

export function SidebarRight({
  CLass,
  User,
  ...props
}: React.ComponentProps<typeof Sidebar> & { CLass: Class; User: User | null }) {
  const USER = {
    name: User?.user_metadata.full_name as string,
    email: User?.email as string,
    avatar: User?.user_metadata.avatar_url as string,
  };

  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarContent className="h-svh">
        <SidebarHeader className="border-sidebar-border h-16 border-b">
          <NavUser user={USER} />
        </SidebarHeader>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
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
