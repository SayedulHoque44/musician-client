import React from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { myAxios } from "../../../Hooks/useAxiosSecure";

const Feedback = () => {
  const { state } = useLocation();
  const { item } = state;
  const navigate = useNavigate();

  const handleFeedback = (event, item) => {
    event.preventDefault();
    const value = event.target.feedback.value;
    if (value) {
      myAxios
        .patch(`classes/${item._id}?status=deny`, { feedback: value })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success(`${item.name} denied!`);
            navigate("/dashboard/manageClasses", { replace: true });
          }
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast.error("Please Give Feedback!");
    }
  };
  return (
    <div className="p-10">
      <h1 className="uppercase text-3xl text-center">
        <span className="text-yellow-600">{item.name}</span> Feedback!
      </h1>
      <form onSubmit={(event) => handleFeedback(event, item)}>
        <textarea
          name="feedback"
          className="textarea textarea-secondary w-full my-7"
          placeholder="Feedback"></textarea>
        <button type="submit" className="btn btn-error w-full">
          Send
        </button>
      </form>
    </div>
  );
};

export default Feedback;
