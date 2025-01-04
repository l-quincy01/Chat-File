import { Outlet } from "react-router";
import { ThemeProvider } from "../context/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../pages/AppSidebar";
import Header from "../local_components/header";
//import SidebarPage from "./AppSidebar";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <div className=" w-full ">
          <Header />

          <Outlet />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
