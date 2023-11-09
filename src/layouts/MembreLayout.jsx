import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navigate } from 'react-router-dom';

function MembreLayout() {
  const { user, token, role } = useStateContext();
  if (!token) {
    return <Navigate to="/login"/>
  }

  return (
    <div>MembreLayout</div>
  )
}

export default MembreLayout