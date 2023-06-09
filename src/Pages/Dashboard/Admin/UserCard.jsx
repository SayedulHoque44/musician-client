import React from "react";
import { toast } from "react-hot-toast";
import { myAxios } from "../../../Hooks/useAxiosSecure";

const UserCard = ({ user, refetch }) => {
  const { Name, image, email, role, _id } = user;
  // console.log(user);
  //
  const handleInstructor = (user) => {
    const role = "instructor";
    myAxios
      .patch(`/userRoleChange/${_id}`, { role })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${Name} Is Now Insctructor`);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  //
  const handleAdmin = (user) => {
    const role = "admin";
    myAxios
      .patch(`/userRoleChange/${_id}`, { role })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${Name} Is Now Insctructor`);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  //
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {Name}
          <div className="badge badge-secondary font-semibold">{role}</div>
        </h2>
        <p>{email}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleInstructor(user)}
            disabled={role === "instructor" ? true : false}
            className="btn badge badge-outline btn-accent">
            Instructor
          </button>
          <button
            onClick={() => handleAdmin(user)}
            disabled={role === "admin" ? true : false}
            className="btn badge badge-outline btn-warning">
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
