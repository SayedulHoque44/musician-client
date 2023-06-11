import React from "react";
import { Navigate } from "react-router-dom";
import useGetContext from "../Hooks/useGetContext";

const PrivateAuthRoute = ({ children }) => {
  const { user, loading } = useGetContext();

  if (loading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default PrivateAuthRoute;
