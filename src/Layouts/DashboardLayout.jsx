import React from "react";
import useGetContext from "../Hooks/useGetContext";

const DashboardLayout = () => {
  const { role } = useGetContext();
  console.log(role);
  let navItems;
  if (role === "instructor") {
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
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
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
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
