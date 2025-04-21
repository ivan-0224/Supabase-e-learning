"use client";
import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  File,
  FileIcon,
  Files,
  FileSearch,
  FileSearch2Icon,
  FilesIcon,
  Home,
  Inbox,
  LogOutIcon,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
  Users,
  Video,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavGroups } from "@/components/NavGroups";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { User } from "@supabase/supabase-js";

import { usePathname } from "next/navigation";
import { NavUser } from "./nav-user";

import { Button } from "./ui/button";
import Link from "next/link";
import { Class } from "@/utils/types";
import { formatDate } from "@/utils/date";

export function SidebarLeft({
  CLass,
  User,
  ...props
}: React.ComponentProps<typeof Sidebar> & { CLass: Class; User: User | null }) {
  const USER = {
    name: User?.user_metadata.full_name as string,
    email: User?.email as string,
    avatar: User?.user_metadata.avatar_url as string,
  };
  const pathname = usePathname();
  // Function to check if a link is active
  const ActiveLink = (href: string) => pathname === href;
  //GET GROUPS

  const data = {
    navMain: [
      {
        title: "Ask AI",
        url: `/user/${User?.id}/class/created/${CLass.class_id}/ai/`,
        icon: Sparkles,
        isActive: ActiveLink(
          `/user/${User?.id}/class/created/${CLass.class_id}/ai`
        ),
      },
      {
        title: "Home",
        url: `/user/${User?.id}/class/created/${CLass.class_id}/`,
        icon: Home,
        isActive: ActiveLink(
          `/user/${User?.id}/class/created/${CLass.class_id}`
        ),
      },
      {
        title: "Course Documents",
        url: `/user/${User?.id}/class/created/${CLass.class_id}/courseDocs/`,
        icon: FileSearch2Icon,
        badge: "10",
        isActive: ActiveLink(
          `/user/${User?.id}/class/created/${CLass.class_id}/courseDocs`
        ),
      },
      {
        title: "TD Documents",
        url: `/user/${User?.id}/class/created/${CLass.class_id}/TdDocs/`,
        icon: FileSearch,
        badge: "10",
        isActive: ActiveLink(
          `/user/${User?.id}/class/created/${CLass.class_id}/TdDocs`
        ),
      },
      {
        title: "Meet",
        url: `/user/${User?.id}/class/created/${CLass.class_id}/meet/`,
        icon: Video,
        badge: "10",
        isActive: ActiveLink(
          `/user/${User?.id}/class/created/${CLass.class_id}/meet`
        ),
      },
      {
        title: "students",
        url: `/user/${User?.id}/class/created/${CLass.class_id}/students/`,
        icon: Users,
        badge: "10",
        isActive: ActiveLink(
          `/user/${User?.id}/class/created/${CLass.class_id}/students`
        ),
      },
    ],
    groups: [
      {
        name: "Group A01",
        emoji: "🏫",
        pages: [
          {
            name: "Td Submissions",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group1/td`,
            emoji: "📔",
          },
          {
            name: "Td submissions by grp",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group1/tdbgroup`,
            emoji: "🤝",
          },
          {
            name: "Notes",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group1/notes`,
            emoji: "🌟",
          },
        ],
      },
      {
        name: "Group A02",
        emoji: "🏫",
        pages: [
          {
            name: "Td Submissions",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group2/td`,
            emoji: "📔",
          },
          {
            name: "Td submissions by grp",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group2/tdbgroup`,
            emoji: "🤝",
          },
          {
            name: "Notes",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group2/notes`,
            emoji: "🌟",
          },
        ],
      },
      {
        name: "Group A03",
        emoji: "🏫",
        pages: [
          {
            name: "Td Submissions",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group3/td`,
            emoji: "📔",
          },
          {
            name: "Td submissions by grp",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group3/tdbgroup`,
            emoji: "🤝",
          },
          {
            name: "Notes",
            url: `/user/${User?.id}/class/created/${CLass.class_id}/group3/notes`,
            emoji: "🌟",
          },
        ],
      },
      {
        name: "Group A04",
        emoji: "🏫",
        pages: [
          {
            name: "Td Submissions",
            url: "#",
            emoji: "📔",
          },
          {
            name: "Td submissions by grp",
            url: "#",
            emoji: "🤝",
          },
          {
            name: "Notes",
            url: "#",
            emoji: "🌟",
          },
        ],
      },
      {
        name: "Group A05",
        emoji: "🏫",
        pages: [
          {
            name: "Td Submissions",
            url: "#",
            emoji: "📔",
          },
          {
            name: "Td submissions by grp",
            url: "#",
            emoji: "🤝",
          },
          {
            name: "Notes",
            url: "#",
            emoji: "🌟",
          },
        ],
      },
    ],
  };

  const { isMobile } = useSidebar();

  const date = new Date();
  const DATE = formatDate(date);

  return (
    <Sidebar className="border-r-0 " {...props}>
      <SidebarHeader>
        {isMobile && (
          <h1 className="text-black text-xl  p-2 bg-white dark:bg-black rounded-md">
            <div className="flex">
              <span className="font-semibold  dark:text-white">Fsegt</span>
              <span className="text-blue-400 font-semibold">Classroom</span>
            </div>
          </h1>
        )}

        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGroups groups={data.groups} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="lg:hidden">
        <div className="sm:hidden w-full text-center text-gray-500">{DATE}</div>

        <NavUser user={USER} />
        <Button asChild className="text-start">
          <Link href={"/"}>
            Go back To home <LogOutIcon />
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
