import React from "react";
import SideNav from "./_components/SideNav";

function CheckUsOutLayout({ children }: any) {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}

export default CheckUsOutLayout;
