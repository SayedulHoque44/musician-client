import React from "react";
import { Navigate } from "react-router-dom";
import useGetContext from "../Hooks/useGetContext";
import useUserRole from "../Hooks/useUserRole";

const StudentPrivateRoute = ({ children }) => {
  const { user, loading } = useGetContext();
  const [userRole, userRoleoading] = useUserRole();

  console.log(userRole);
  if (loading || userRoleoading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  } else if (user && userRole === "student") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default StudentPrivateRoute;
