import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { myAxios } from "../../Hooks/useAxiosSecure";
import useGetContext from "../../Hooks/useGetContext";
import useGetEnroll from "../../Hooks/useGetEnroll";
import usePaidClasses from "../../Hooks/usePaidClasses";
import useUserRole from "../../Hooks/useUserRole";

const ClassCard = ({ card }) => {
  const { user } = useGetContext();
  const navigate = useNavigate();
  const [userRole, userRoleoading] = useUserRole();
  const [loading, setLoading] = useState(false);
  const [enrolledClasses, isLoading, refetch] = useGetEnroll(user?.email);
  const [Paidclasses, , isPaidLoading] = usePaidClasses(user?.email);
  // console.log(enrolledClasses);
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
  let proccesClass = false;
  if (enrolledClasses || Paidclasses) {
    if (enrolledClasses.find((item) => item.classId === _id)) {
      proccesClass = "selected";
    } else if (Paidclasses.find((item) => item.classId === _id)) {
      proccesClass = "paid";
    } else {
      proccesClass = false;
    }
  }
  // console.log(proccesClass);
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
            toast.success(`Selected!`);
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
    <div
      className={`card w-full bg-base-100 relative  ${
        availableSets === 0 ? "bg-red-400" : "bg-base-100"
      } shadow-xl `}>
      <figure>
        <img
          className="h-[355px] w-full object-cover"
          src={imageUrl}
          alt="Movie"
        />
      </figure>
      <div className="card-body ">
        <div className="badge text-lg font-semibold badge-secondary absolute top-0 right-0">
          ${price}
        </div>
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-500">
          {instructorName} <br />
        </p>
        {/* Ata tkn kombe jkn payment krbe */}

        <p className="font-semibold">
          {availableSets === 0 ? (
            <span className="text-warning">Sets Are Full..!</span>
          ) : (
            <span>Available Sets : {availableSets}</span>
          )}
        </p>
        <div className="card-actions justify-end">
          {proccesClass === "selected" && (
            <button className="btn btn-primary w-full" disabled>
              Selected
            </button>
          )}
          {proccesClass === "paid" && (
            <button className="btn bg-violet-600 disabled w-full">
              Enrolled
            </button>
          )}
          {proccesClass === false && (
            <button
              className="btn btn-primary w-full"
              disabled={
                (availableSets !== 0 && userRole !== "admin") ||
                userRole !== "instructor"
                  ? false
                  : true
              }
              onClick={handleEnroll}>
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
