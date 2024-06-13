import { ButtonProps } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface SidebarButtonProps extends ButtonProps {
  icon?: LucideIcon;
}

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
}

export interface SidebarDesktopPops {
  sidebarItems: SidebarItems;
}
