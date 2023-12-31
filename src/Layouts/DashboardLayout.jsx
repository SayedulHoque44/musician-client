import React from "react";
import { Link, Outlet } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";

const DashboardLayout = () => {
  const [userRole, userRoleoading] = useUserRole();

  let navItems;
  if (userRole === "instructor") {
    navItems = (
      <>
        <li>
          <Link to={"addClass"}>Add a Class</Link>
        </li>
        <li>
          <Link to={"myClass"}>My Classes</Link>
        </li>
      </>
    );
  } else if (userRole === "admin") {
    navItems = (
      <>
        <li>
          <Link to={"manageClasses"}>Manage Classes</Link>
        </li>
        <li>
          <Link to={"manageUsers"}>Manage Users</Link>
        </li>
      </>
    );
  } else if (userRole === "student") {
    navItems = (
      <>
        <li>
          <Link to={"selectedClass"}>My Selected Classes</Link>
        </li>
        <li>
          <Link to={"enrolledClass"}>My Enrolled Classes</Link>
        </li>
        <li>
          <Link to={"paymentHistory"}>Payment History</Link>
        </li>
      </>
    );
  } else {
    navItems = (
      <>
        <li>Loading...</li>
      </>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {navItems}
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
