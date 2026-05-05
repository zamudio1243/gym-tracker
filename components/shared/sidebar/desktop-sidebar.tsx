import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
} from "@/shared/ui/sidebar";
import { Dumbbell } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavUser } from "../header/nav-user";
import { getServerUser } from "@/shared/server/session";
import { navItems } from "./nav-items";

export async function DesktopSidebar({
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
              <Link href="/dashboard">
                <Dumbbell className="size-5!" />
                <span className="text-base font-semibold">FlexShare</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user.name,
            email: user.email,
            avatar: user.image || "",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
