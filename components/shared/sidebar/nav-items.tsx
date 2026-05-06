import { m } from "@/paraglide/messages";
import { CirclePlay, Dumbbell, Earth, LayoutGrid } from "lucide-react";

export function getNavItems() {
  return [
    {
      title: m.nav_dashboard({}),
      url: "/dashboard",
      icon: <LayoutGrid />,
    },
    {
      title: m.nav_forge({}),
      url: "/forge",
      icon: <Dumbbell />,
    },
    {
      title: m.nav_train({}),
      url: "/train",
      icon: <CirclePlay />,
    },
    {
      title: m.nav_feed({}),
      url: "/feed",
      icon: <Earth />,
    },
  ];
}
