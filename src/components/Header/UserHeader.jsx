import React from "react";
import { Link } from "react-router-dom";

function UserHeader() {
  return (
    <div className="w-full h-20  justify-between items-center inline-flex">
      <div className="text-black text-5xl font-bold font-['Roboto'] leading-[62.40px]">
        Users
      </div>
      <Link
        to="create"
        className="w-[81px] px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px] rounded-lg shadow justify-center items-center gap-2 flex"
      >
        Add new
      </Link>
    </div>
  );
}

export default UserHeader;
