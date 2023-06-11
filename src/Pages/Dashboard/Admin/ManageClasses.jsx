import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { MdCancelScheduleSend, MdOutlineDoneAll } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { myAxios } from "../../../Hooks/useAxiosSecure";
import useGetClasses from "../../../Hooks/useGetClasses";

const ManageClasses = () => {
  const [classes, refetch, isClassesLoading] = useGetClasses();
  const feedRef = useRef(null);
  const navigate = useNavigate();

  //

  // console.log(classes);
  const getStatusColor = (status) => {
    if (status === "pending") {
      return " bg-violet-600";
    } else if (status === "approved") {
      return " bg-success ";
    } else if (status === "deny") {
      return "bg-error";
    }
  };
  //
  const handleApprove = (item) => {
    myAxios
      .patch(`classes/${item._id}?status=approved`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success(`${item.name} Approved!`);
          refetch();
        }
      })
      .catch((err) => toast.error(err.message));
  };
  //
  const handleDeny = (item) => {
    navigate("/dashboard/feedBack", {
      state: { item },
      replace: true,
    });
  };
  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Manage Classes</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Instructor Name & Email</th>
              <th>Available Sets</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.imageUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.instructorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.instructorEmail}
                  </span>
                </td>
                <td> {item.enrolled}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  {" "}
                  <span
                    className={`badge badge-ghost badge-sm text-white ${getStatusColor(
                      item.status
                    )}`}>
                    {item.status}
                  </span>{" "}
                </td>
                <td className="flex gap-2">
                  <button
                    title="Approve"
                    disabled={item.status === "approved"}
                    onClick={() => handleApprove(item)}
                    className="btn btn-success btn-sm mr-3">
                    <MdOutlineDoneAll />
                  </button>
                  <button
                    title="Deny"
                    disabled={
                      item.status === "deny" || item.status === "approved"
                    }
                    onClick={() => handleDeny(item)}
                    className="btn btn-error btn-sm">
                    <MdCancelScheduleSend />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
