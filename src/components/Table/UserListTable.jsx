import React from 'react'
import { Link } from 'react-router-dom'

function UserListTable({ users, loading, onDeleteClick }) {
  return (
    <div className="card bg-white rounded shadow p-6 mb-6 mt-3 animated fadeInDown w-10/12">
    <table className="w-full ">
      <thead className="bg-light">
        <tr className="">
          <th className=" py-2 text-left">
            <input
              type="checkbox"
              // key={currentPage}
              className="w-[18px] h-[18px] mb-0 mr-4  bg-white rounded border border-gray-300"
              // checked={
              //   selectedCustomers[currentPage] &&
              //   selectedCustomers[currentPage].length ===
              //     customers.length &&
              //   customers.length > 0
              // }
              // onChange={() => toggleSelectAllOnPage(currentPage)}
            />
          </th>
          <th className=" py-2 text-left">Image</th>
          <th className=" py-2 text-left">Name</th>
          <th className=" py-2 text-left">Email</th>
          <th className=" py-2 text-left">Role</th>

          <th className=" py-2 text-left">Create Date</th>
          <th className=" py-2 text-left">Actions</th>
        </tr>
      </thead>
      {loading && (
        <tbody>
          <tr>
            <td colSpan="5" className="text-center w-full">
              Loading...
            </td>
          </tr>
        </tbody>
      )}
      {!loading && (
        <tbody>
          {!loading &&
            users.map((u, index) => (
              <tr key={u.id} className="">
                <td>
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] mb-0 mr-4  bg-white rounded border border-gray-300"
                    key={u.id}
                    // checked={
                    //   selectedCustomers[currentPage] &&
                    //   selectedCustomers[currentPage].includes(c.id)
                    // }
                    // onChange={() =>
                    //   toggleSelectCustomer(currentPage, c.id)
                    // }
                  />
                </td>
                <td className="">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={`${import.meta.env.VITE_API_BASE_URL}/${
                      u.image
                    }`}
                    alt={``}
                  />
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  {u.role === 0 && "Member"}
                  {u.role === 1 && "Responsable"}
                  {u.role === 2 && "Admin"}
                </td>
                <td>{u.created_at}</td>
                <td className="flex items-center">
                  <Link
                    to={"/users/" + u.id}
                    className="w-auto px-3.5 py-2 mr-2 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow justify-center items-center gap-2 flex"
                  >
                    <div className="text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]">
                      View
                    </div>
                  </Link>
                  <Link
                    to={"/users/update/" + u.id}
                    className="w-auto px-3.5 py-2 mr-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow justify-center items-center gap-2 flex"
                  >
                    <div className="text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]">
                      Edit
                    </div>
                  </Link>
                  <button
                    onClick={(ev) => onDeleteClick(u)}
                    className="w-auto px-3.5 py-2 bg-red-600 hover:bg-red-500 active:bg-red-700  rounded-lg shadow justify-center items-center gap-2 flex"
                  >
                    <div className="text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]">
                      Delete
                    </div>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      )}
    </table>
  </div>  )
}

export default UserListTable