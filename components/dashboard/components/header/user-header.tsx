"use client";

import { signOutAction } from "@/components/home/actions/auth.actions";
import { AvatarImage, AvatarFallback, Avatar } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
} from "@/shared/ui/dropdown-menu";
import { CircleUser, LogOut } from "lucide-react";
import { m } from "@/paraglide/messages";

export function UserHeader({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="ml-auto h-auto rounded-xl border border-border/60 bg-card/60 px-3 py-2 text-foreground shadow-sm hover:bg-card hover:text-foreground"
        >
          <Avatar className="h-9 w-9 rounded-full border border-border/60">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-full bg-muted text-xs font-semibold text-foreground">
              {initials || "US"}
            </AvatarFallback>
          </Avatar>
          <div className="grid text-left text-sm leading-tight">
            <span className="max-w-32 truncate font-medium">{user.name}</span>
            <span className="max-w-40 truncate text-xs text-muted-foreground">
              {user.email}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={"bottom"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-full border border-border/60">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-full bg-muted text-xs font-semibold text-foreground">
                {initials || "US"}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CircleUser />
            {m.user_menu_account({})}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <form action={signOutAction}>
          <DropdownMenuItem asChild>
            <button type="submit" className="w-full">
              <LogOut />
              {m.user_menu_logout({})}
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
