import React from "react";
import { Button } from "./ui/button";
import { SidebarButtonProps } from "@/types";
import { cn } from "@/lib/utils";

export function SidebarButton({
  icon: Icon,
  className,
  children,
  ...props
}: SidebarButtonProps) {
  return (
    <Button
      variant={"ghost"}
      className={cn("gap-2 justify-start", className)}
      {...props}
    >
      {Icon && <Icon size={20} />}
      <span> {children} </span>
    </Button>
  );
}
