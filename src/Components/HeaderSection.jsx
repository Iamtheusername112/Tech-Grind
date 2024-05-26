import React from "react";
import { Button } from "./ui/button";

const menuList = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },

  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "About",
    path: "/about",
  },
];

function HeaderSection() {
  return (
    <div className="flex justify-between p-10 border-b shadow-2xl">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="flex gap-5">
          {menuList.map((menu, index) => (
            <li key={index}>{menu.name}</li>
          ))}
        </ul>
      </div>
      <div className="items-center">
        <Button>Our Projects</Button>
      </div>
    </div>
  );
}

export default HeaderSection;
