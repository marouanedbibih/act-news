import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/auth/Login";
import Signup from "../views/auth/Signup";
import UserLayout from "../layouts/UserLayout";
import User from "../views/user/User";
import UserForm from "../views/user/UserForm";
import MembreLayout from "../layouts/MembreLayout";
import Portfolio from "../views/membre/Portfolio";
import UserView from "../views/user/UserView";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/users" />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/users/create",
        element: <UserForm key="userCreate" />,
      },
      {
        path: "/users/update/:id",
        element: <UserForm key="userUpdate" />,
      },
      {
        path: "/users/:id",
        element: <UserView />,
      },
    ],
  },
  {
    path: "/",
    element: <MembreLayout />,
    children: [
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
