import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function UserLayout() {
  const { user, token, role, setUser, _setToken, _setRole, notification } =
    useStateContext();
  const roleInt = parseInt(role);
  if (!token || roleInt !== 2) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 flex items-centre justify-end mt-20">
          <div style={{ width: "calc(100vw - 240px)" }} className="px-16 py-4 h-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserLayout;
