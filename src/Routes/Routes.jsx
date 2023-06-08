import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "myClass",
        element: <MyClass />,
      },
    ],
  },
]);
