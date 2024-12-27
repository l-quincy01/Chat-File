import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center w-full p-4">
      <SidebarTrigger />

      <ModeToggle />
    </nav>
  );
}
