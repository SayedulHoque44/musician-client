import React from "react";

const UserCard = ({ user }) => {
  const { name, image, email, role } = user;

  //
  const handleInstructor = (user) => {
    console.log(user);
  };
  //
  const handleAdmin = (user) => {
    console.log(user);
  };

  //
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
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
