import { CirclePlay, Dumbbell, Earth, LayoutGrid } from "lucide-react";

export const navItems = [
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
];
