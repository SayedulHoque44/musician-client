import React from "react";

const UserCard = () => {
  let role = "admin";

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          User Name
          <div className="badge badge-secondary">{role}</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button
            disabled={role === "instructor" ? true : false}
            className="btn badge badge-outline btn-accent">
            Instructor
          </button>
          <button
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
