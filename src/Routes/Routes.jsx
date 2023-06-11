import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import Classes from "../Pages/Classes/Classes";
import Feedback from "../Pages/Dashboard/Admin/Feedback";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import DasHome from "../Pages/Dashboard/DasHome/DasHome";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import UpdateCLass from "../Pages/Dashboard/Instructor/UpdateCLass";
import EnrolledClass from "../Pages/Dashboard/Student/EnrolledClass";
import Payment from "../Pages/Dashboard/Student/Payment";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass";
import PageNotFound from "../Pages/Error/PageNotFound";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminPrivateRoute from "../Private/AdminPrivateRoute";
import InstructorPrivateRoute from "../Private/InstructorPrivateRoute";
import PrivateAuthRoute from "../Private/PrivateAuthRoute";
import StudentPrivateRoute from "../Private/StudentPrivateRoute";

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
    errorElement: <PageNotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateAuthRoute>
        <DashboardLayout />
      </PrivateAuthRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateAuthRoute>
            <DasHome />
          </PrivateAuthRoute>
        ),
      },
      // ____________Instructor Route________________
      {
        path: "addClass",
        element: (
          <InstructorPrivateRoute>
            <AddClass />
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorPrivateRoute>
            <MyClass />
          </InstructorPrivateRoute>
        ),
      },

      {
        path: "updateClass",
        element: (
          <InstructorPrivateRoute>
            <UpdateCLass />
          </InstructorPrivateRoute>
        ),
      },
      // ___________Admin_________
      {
        path: "manageClasses",
        element: (
          <AdminPrivateRoute>
            <ManageClasses />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "feedBack",
        element: (
          <AdminPrivateRoute>
            <Feedback />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminPrivateRoute>
            <ManageUsers />
          </AdminPrivateRoute>
        ),
      },
      // __________Student__________
      {
        path: "selectedClass",
        element: (
          <StudentPrivateRoute>
            <SelectedClass />
          </StudentPrivateRoute>
        ),
      },
      {
        path: "enrolledClass",
        element: (
          <StudentPrivateRoute>
            <EnrolledClass />
          </StudentPrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentPrivateRoute>
            <Payment />
          </StudentPrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentPrivateRoute>
            <PaymentHistory />
          </StudentPrivateRoute>
        ),
      },
    ],
    errorElement: <PageNotFound />,
  },
]);
