import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className=" px-8">
      <Outlet />
    </div>
  );
}
