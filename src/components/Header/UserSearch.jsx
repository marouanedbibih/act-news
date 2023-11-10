import React from 'react'

function UserSearch() {
  return (
    <div className="w-full flex justify-start items-center gap-8">
    <form action="" className="flex justify-center items-center w-3/4">
      <input
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        className="outline-none bg-white w-full border-2 border-gray-300 mb-[15px] px-[15px] py-[15px] box-border text-[14px] transition duration-300 rounded-[16px] focus:border-gray-800"
        placeholder="search"
      />{" "}
    </form>
    <select
            // value={user.role}
            // onChange={(ev) => setUser({ ...user, role: ev.target.value })}
            className="outline-none bg-white w-1/4 border-2 border-gray-300 mb-[15px] px-[15px] py-[15px] box-border text-[14px] transition duration-300 rounded-[16px] focus:border-gray-800"
          >
            <option value="">Select Role</option>
            <option value="0">Membre</option>
            <option value="1">Responsable</option>
            <option value="2">Admin</option>
          </select>
    </div>  )
}

export default UserSearch