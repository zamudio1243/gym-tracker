import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
} from "@/shared/ui/sidebar";
import { CirclePlay, Dumbbell, Earth, LayoutGrid } from "lucide-react";
import * as React from "react";
import { NavMain } from "./nav-main";
import { NavUser } from "../header/nav-user";
import { getServerUser } from "@/shared/server/session";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutGrid />,
    },
    {
      title: "Forge",
      url: "/forge",
      icon: <Dumbbell />,
    },
    {
      title: "Train",
      url: "/train",
      icon: <CirclePlay />,
    },
    {
      title: "Feed",
      url: "/feed",
      icon: <Earth />,
    },
  ],
};

export async function  DesktopSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {

  const user = await getServerUser();
  if (!user) {
    return null;
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="/dashboard">
                <Dumbbell className="size-5!" />
                <span className="text-base font-semibold">FlexShare</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: user.name, email: user.email, avatar: user.image || "" }} />
      </SidebarFooter>
    </Sidebar>
  );
}
