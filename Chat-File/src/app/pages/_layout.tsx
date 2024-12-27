import { Outlet } from "react-router";
import { ThemeProvider } from "../context/ThemeProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../pages/AppSidebar";
//import SidebarPage from "./AppSidebar";

export default function Layout() {
  //const cookieStore = await cookies()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <div className=" ">
          <SidebarTrigger />
          <Outlet />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
