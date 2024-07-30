import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/ModeToggle";

function Header() {
  return (
    <div className="p-5 border-b shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="text-l font-semibold">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/logo.svg"} height={50} width={50} alt="logo" />
            <h1 className="justify-start">Tech Grind</h1>{" "}
          </Link>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
