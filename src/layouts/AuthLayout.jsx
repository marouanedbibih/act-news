import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function AuthLayout() {
  const { user, token, role } = useStateContext();

  if (token) {
    if (role === 1) {
      return <Navigate to="/users" />;
    } else if (role === 0) {
      return <Navigate to="/resume" />;
    }
    else if (role === 2) {
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
