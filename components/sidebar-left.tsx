"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
  Video,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavGroups } from "@/components/NavGroups";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Meet",
      url: "#",
      icon: Video,
      badge: "10",
    },
  ],

  groups: [
    {
      name: "Group A01",
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
      name: "Group A02",
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
      name: "Group A03",
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

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0 absolute top-[75px] left-0" {...props}>
      <SidebarHeader>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavGroups groups={data.groups} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
