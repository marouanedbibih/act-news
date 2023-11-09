import React from 'react'
import { Link, useLocation } from "react-router-dom";


function MenuLink({ route, label, icon }) {
    const location = useLocation();

    const isActive = (route) => {
      return location.pathname === route ? "bg-zinc-300 bg-opacity-50" : "";
    };
  
    return (
      <Link
        to={route}
        className={`w-[189px] h-[34px] p-2 mb-3 hover:bg-zinc-300 hover:bg-opacity-50 active:bg-zinc-400 active:bg-opacity-50 rounded-lg flex items-center gap-2 ${isActive(
          route
        )}`}
      >
        <div className="w-3.5 h-[14.21px] relative mr-2">{icon}</div>
        <div className="text-white text-sm font-bold font-['Roboto'] leading-[18.20px]">
          {label}
        </div>
      </Link>
    );
}

export default MenuLink