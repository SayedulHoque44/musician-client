import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import Classes from "../Pages/Classes/Classes";
import Feedback from "../Pages/Dashboard/Admin/Feedback";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import UpdateCLass from "../Pages/Dashboard/Instructor/UpdateCLass";
import EnrolledClass from "../Pages/Dashboard/Student/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
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
      {
        path: "feedBack",
        element: <Feedback />,
      },
      {
        path: "updateClass",
        element: <UpdateCLass />,
      },
      {
        path: "manageClasses",
        element: <ManageClasses />,
      },
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "selectedClass",
        element: <SelectedClass />,
      },
      {
        path: "enrolledClass",
        element: <EnrolledClass />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);
