"use client";

import React from "react";
import { SidebarDesktop } from "./sidebar-desktop";
import { Contact, Home, Projector, Users } from "lucide-react";
import { SidebarItems } from "@/types";

const sidebarItems: SidebarItems = {
  links: [
    { label: "  Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Users },
    { label: "Projects", href: "/project", icon: Projector },
    { label: "Contact us", href: "/contact", icon: Contact },
  ],
};

export function Sidebar() {
  return <SidebarDesktop sidebarItems={sidebarItems} />;
}
