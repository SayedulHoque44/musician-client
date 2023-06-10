import React from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { myAxios } from "../../../Hooks/useAxiosSecure";
import useGetContext from "../../../Hooks/useGetContext";
import useGetEnroll from "../../../Hooks/useGetEnroll";

const SelectedClass = () => {
  const { user } = useGetContext();
  const [enrolledClasses, isLoading, refetch] = useGetEnroll(user?.email);
  // console.log(enrolledClasses);

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
        myAxios
          .delete(`/enroll/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                `${item.name} Has been Deleted!`,
                "success"
              );
            }
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Selected Class</h1>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.instructorName}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(item)}>
                    delete
                  </button>
                  <button className="btn btn-warning ml-3">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
