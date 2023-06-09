import React from "react";
import useGetUsers from "../../../Hooks/useGetUsers";
import UserCard from "./UserCard";

const ManageUsers = () => {
  const [Users, refetch, isUserLoading] = useGetUsers();
  // console.log(Users);
  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Manage Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-7">
        {Users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
