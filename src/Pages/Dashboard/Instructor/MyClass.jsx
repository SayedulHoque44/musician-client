import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { myAxios } from "../../../Hooks/useAxiosSecure";
import useGetClasses from "../../../Hooks/useGetClasses";
import useGetContext from "../../../Hooks/useGetContext";

const MyClass = () => {
  const { user, loading } = useGetContext();
  const [classes, refetch, isClassesLoading] = useGetClasses(user?.email);
  const navigate = useNavigate();
  // console.log(classes);

  //
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
  const handleUpdate = (item) => {
    navigate("/dashboard/updateClass", { state: item, replace: true });
  };
  //
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        myAxios.delete(`/classesInstructor/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Myclasses</h1>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Enrolled</th>
              <th>Status</th>
              {/* {item.status === "deny" && <td>Feedback</td>} */}
              <th>Update Or Delete</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.instructorName}</td>
                <td>{item.enrolled}</td>
                <td>
                  <span
                    className={`badge badge-ghost badge-sm text-white ${getStatusColor(
                      item.status
                    )}`}>
                    {item.status}
                  </span>{" "}
                </td>
                <td>
                  <button
                    className="btn btn-warning mr-3"
                    onClick={() => handleUpdate(item)}>
                    update
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(item)}>
                    delete
                  </button>
                </td>
                {item.status === "deny" && (
                  <td className="text-error font-semibold">{item.feedback}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
