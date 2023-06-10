import React from "react";

const InsTructorCard = ({ card }) => {
  const { Name, image, email, role, _id } = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="user" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title">{Name}</h2>
        <p>Email : {email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default InsTructorCard;
