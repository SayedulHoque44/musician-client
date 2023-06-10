import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { myAxios } from "../../Hooks/useAxiosSecure";
import useGetContext from "../../Hooks/useGetContext";
import useGetEnroll from "../../Hooks/useGetEnroll";
import useUserRole from "../../Hooks/useUserRole";

const ClassCard = ({ card }) => {
  const { user } = useGetContext();
  const navigate = useNavigate();
  const [userRole, userRoleoading] = useUserRole();
  const [loading, setLoading] = useState(false);
  const [enrolledClasses, isLoading, refetch] = useGetEnroll(user?.email);
  console.log(enrolledClasses);
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
  //

  //
  const handleEnroll = () => {
    setLoading(true);
    if (user && user.email) {
      const newEnroll = {
        classId: _id,
        email: user.email,
        instructorName,
        name,
        imageUrl,
        price,
      };
      //
      myAxios
        .post("/enroll", newEnroll)
        .then((res) => {
          setLoading(false);
          if (res.data.insertedId) {
            toast.success(`Enrolled Successfull!`);
            refetch();
          } else {
            toast.error(`Somthing Wrong!`);
          }
        })
        .catch((err) => toast.error(err.message));
    } else {
      Swal.fire({
        title: "You Are Not Login!",
        text: "Go To Login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
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
        {/* Ata tkn kombe jkn payment krbe */}
        <p className="font-semibold">Available Sets : {availableSets}</p>
        <div className="card-actions justify-end">
          {enrolledClasses.find((item) => item.classId === _id) ? (
            <button className="btn btn-primary" disabled>
              Enrolled
            </button>
          ) : (
            <button
              className="btn btn-primary"
              disabled={
                enrolled < availableSets && userRole === "student"
                  ? false
                  : true
              }
              onClick={handleEnroll}>
              Enroll
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
