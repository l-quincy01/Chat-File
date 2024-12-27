"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  FilePlus2,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      date: "Dec, 10 ",
      isActive: true,
      items: [
        {
          resourceID: "03",
          title: "Summarise Shakespeare",
          url: "#",
        },
        {
          resourceID: "02",
          title: "Summarise ",
          url: "#",
        },
        {
          resourceID: "09",
          title: "Summarise Docling",
          url: "#",
        },
      ],
    },
    {
      date: "Dec, 7 ",
      isActive: true,
      items: [
        {
          resourceID: "03",
          title: "Summarise Shakespeare",
          url: "#",
        },
        {
          resourceID: "02",
          title: "Summarise ",
          url: "#",
        },
        {
          resourceID: "09",
          title: "Summarise Docling",
          url: "#",
        },
      ],
    },
    {
      date: "Dec, 1 ",
      isActive: true,
      items: [
        {
          resourceID: "03",
          title: "Summarise Shakespeare",
          url: "#",
        },
        {
          resourceID: "02",
          title: "Summarise ",
          url: "#",
        },
        {
          resourceID: "09",
          title: "Summarise Docling",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

//if collapsible icons { ...props }: React.ComponentProps<typeof Sidebar>
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <div className="flex items-center justify-center">
          <div className=" hover:bg-slate-100 rounded-lg border-2 p-2 flex flex-row items-center  gap-x-2 justify-center text-sm w-3/4">
            New Chat
            <FilePlus2 size={16} />
          </div>
        </div>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
