// components/Shared/LoginLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LoginLayout;
