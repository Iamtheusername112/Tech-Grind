"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { HambuirgerMenuToggle } from "@/components/hambuirger-menu-toggle";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle the resizing event
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Set up an event listener to detect screen size changes
  useEffect(() => {
    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Add resize listener

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-5 border-b shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="text-l font-semibold">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/logo.svg"} height={50} width={50} alt="logo" />
            <h1 className="justify-start">Tech Grind</h1>
          </Link>
        </div>

        {/* Conditionally render based on mobile or desktop */}
        {isMobile ? <HambuirgerMenuToggle /> : <ModeToggle />}
      </div>
    </div>
  );
}

export default Header;
