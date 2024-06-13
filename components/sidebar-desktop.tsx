import React from "react";
import { SidebarButton } from "./sidebar-button";
import { Home } from "lucide-react";
import { SidebarDesktopPops } from "@/types";
import Link from "next/link";

export function SidebarDesktop(props: SidebarDesktopPops) {
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">
          Tech Grind
        </h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton icon={link.icon} className="w-full">
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
