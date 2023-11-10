import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axios";

import UserHeader from "../../components/Header/UserHeader";
import UserListTable from "../../components/Table/UserListTable";
import Pagination from "../../components/Pagination/Pagination";
import UserSearch from "../../components/Header/UserSearch";

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const carouselPages = 5;
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  const getUsers = (page) => {
    setLoading(true);
    axiosClient
      .get(`/users?page=${page}`)
      .then(({ data }) => {
        setLoading(false);
        setUsers(data.data);
        setTotalPages(data.meta.last_page);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const onPreviousPage = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
    }
  };

  const onDeleteClick = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    axiosClient
      .delete(`/users/${user.id}`)
      .then(() => {
        // displayNotification("User was successfully deleted");
        getUsers(currentPage);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <UserHeader />
      <div
        className="grid grid-cols-1 justify-items-center mb-8 "
        id="user-list"
      >
        <UserSearch/>

        {/* Table of Users */}
        <UserListTable
          users={users}
          loading={loading}
          onDeleteClick={onDeleteClick}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={onChangePage}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
          carouselPages={carouselPages}
        />
      </div>
    </div>
  );
}

export default User;
