import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

function UserLayout() {
  const { user, token, role, setUser, _setToken, _setRole,notification } = useStateContext();
  const roleInt = parseInt(role);
  if (!token || roleInt !== 2 ) {
    return <Navigate to="/login" />;
  }
  return (
    <div>UserLayout

      <Outlet/>
    </div>
  )
}

export default UserLayout