import React from "react";
import UserCard from "./UserCard";

const ManageUsers = () => {
  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Manage Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default ManageUsers;
