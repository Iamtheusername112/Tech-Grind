"use client";

import { Button } from "@/components/ui/button";
import {
  Computer,
  FolderKanban,
  MessageCircleReply,
  CalendarDays,
  SearchX,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Developer",
      icon: Computer,
      path: "/check-us-out",
    },
    {
      id: 2,
      name: "About",
      icon: SearchX,
      path: "/check-us-out/about",
    },
    {
      id: 3,
      name: "Our Projects",
      icon: FolderKanban,
      path: "/check-us-out/projects",
    },
    {
      id: 4,
      name: "Events",
      icon: CalendarDays,
      path: "/check-us-out/events",
    },
    {
      id: 5,
      name: "Contact Us",
      icon: MessageCircleReply,
      path: "/check-us-out/contact",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    //   console.log(path);
  }, [path]);

  return (
    <div className="h-screen shadow-md border-r">
      <div className="p-7">
        {menuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={`flex items-center gap-4 mb-3 p-5 hover:bg-primary hover:text-white rounded-3xl cursor-pointer 
                ${path == menu.path && "bg-primary text-white"}`}
          >
            <menu.icon />
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="fixed bottom-20 p-6 w-64">
        <Button className="w-full rounded-3xl">Tech Grind</Button>
      </div>
    </div>
  );
}

export default SideNav;
