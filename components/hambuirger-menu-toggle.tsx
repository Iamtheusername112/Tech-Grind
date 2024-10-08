"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/Hooks/use-media-query";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "lucide-react";
import SideNavMobile from "@/app/check-us-out/_components/SideNavMobile";

interface ModeToggleProps {
  onClick?: () => void;
}

export const HambuirgerMenuToggle = ({ onClick }: ModeToggleProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Function to open the drawer
  const openDrawer = () => setIsDrawerOpen(true);

  // Function to close the drawer
  const closeDrawer = () => setIsDrawerOpen(false);

  return isDesktop ? (
    <div className="hidden">Desktop</div>
  ) : (
    <div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger>
          <Menu onClick={openDrawer} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="items-center justify-between flex p-3">
            <ModeToggle />
            <DrawerClose onClick={closeDrawer}>
              <Button variant="outline">Close Menu</Button>
            </DrawerClose>
          </DrawerHeader>

          {/* Pass the closeDrawer function to SideNavMobile */}
          <DrawerFooter>
            <SideNavMobile onLinkClick={closeDrawer} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
