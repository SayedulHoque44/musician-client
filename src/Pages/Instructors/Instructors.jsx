import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { myAxios } from "../../Hooks/useAxiosSecure";
import InsTructorCard from "./InsTructorCard";

const Instructors = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    myAxios
      .get("/allInstructor")
      .then((res) => setInstructor(res.data))
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-3">
        {instructor.map((card) => (
          <InsTructorCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
