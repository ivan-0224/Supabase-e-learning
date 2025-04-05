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

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      side="right"
      className=" border-l h-fit lg:flex hidden"
    >
      <SidebarContent>
        <SidebarHeader className="border-sidebar-border h-16 border-b">
          ClassCode
        </SidebarHeader>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        Chatbot
      </SidebarContent>
    </Sidebar>
  );
}
