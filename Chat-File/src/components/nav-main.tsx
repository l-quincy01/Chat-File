"use client";

import ChatDropDown from "@/app/local_components/Sidebar/ChatDropDown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export function NavMain({
  items,
}: {
  items: {
    date: string;

    isActive?: boolean;
    items?: {
      resourceID: string;
      title: string;
      url: string;
    }[];
  }[];
}) {
  const [activeResource, setActiveResource] = useState<string>();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chats</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.date}
            asChild
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.date}>
                  <span>{item.date}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <Link
                      // to={`/chat/${subItem.resourceID}`}
                      to={`/chat`}
                      onClick={() => {
                        setActiveResource(subItem.resourceID);
                      }}
                    >
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className={`${
                            activeResource === subItem.resourceID
                              ? "bg-gray-100"
                              : ""
                          }`}
                        >
                          <a href={subItem.url}>
                            <span className="w-[16ch] truncate">
                              {subItem.title}
                            </span>
                            <ChatDropDown resourceID={subItem.resourceID} />
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </Link>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
