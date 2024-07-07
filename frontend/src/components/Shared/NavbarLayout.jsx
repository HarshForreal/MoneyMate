import React from "react";
import { Outlet } from "react-router-dom";

function NavbarLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default NavbarLayout;
