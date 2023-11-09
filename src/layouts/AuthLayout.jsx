import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function AuthLayout() {
  const { user, token, role } = useStateContext();
  const roleInt = parseInt(role);

  if (token) {
    if (roleInt === 1) {
      return <Navigate to="/portfolio" />;
    } else if (roleInt === 0) {
      return <Navigate to="/portfolio" />;
    }
    else if (roleInt === 2) {
      return <Navigate to="/users" />;
    }
  }
  return (
    <div className="bg-light flex flex-col h-screen">
      <div className="w-full h-20 relative bg-white shadow" />
      <div className="w-full flex-1 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
