import { SidebarMenuAction, useSidebar } from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MessageCircleMore,
  MoreHorizontal,
  Text,
  Trash2,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router";

interface Props {
  resourceID: string;
}

export default function ChatDropDown({ resourceID }: Props) {
  const { isMobile } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuAction showOnHover>
          <MoreHorizontal />
          <span className="sr-only">More</span>
        </SidebarMenuAction>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align={isMobile ? "end" : "start"}
      >
        <DropdownMenuItem>
          <Link
            // to={`/chat/${resourceID}`}
            to={`/chat`}
            className="flex flex-row items-center gap-x-2 "
          >
            <MessageCircleMore className="text-muted-foreground" />
            <span>Chat</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            // to={`/summary/${resourceID}`}
            to={`/summary`}
            className="flex flex-row items-center gap-x-2 "
          >
            <Text className="text-muted-foreground" />
            <span>Summary Box</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            // to={`/mind-map/${resourceID}`}
            to={`/mind-map`}
            className="flex flex-row items-center gap-x-2 "
          >
            <Workflow className="text-muted-foreground" />
            <span>Mind-Maps</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            to={`/chat/${resourceID}`}
            className="flex flex-row items-center gap-x-2 "
          >
            <Trash2 color="red" className="text-muted-foreground" />
            <span>Delete</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
