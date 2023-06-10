import React from "react";

const ClassCard = ({ card }) => {
  const {
    availableSets,
    enrolled,
    imageUrl,
    instructorEmail,
    instructorName,
    name,
    price,
    status,
    _id,
  } = card;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-1/2">
        <img src={imageUrl} alt="Movie" />
      </figure>
      <div className="card-body relative">
        <div className="badge badge-secondary absolute top-0 right-0">
          ${price}
        </div>
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-semibold">Instructor</span> <br />
          Name : {instructorName} <br />
          Email : {instructorEmail}
        </p>
        <p className="font-semibold">Available Sets : {availableSets}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
