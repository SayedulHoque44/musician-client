import React from "react";

const MyClass = () => {
  //
  let status = "deny";
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
              {status === "deny" && <td>Feedback</td>}
              <th>Update Or Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Canada</td>
              <td>
                <span
                  className={`badge badge-ghost badge-sm text-white ${getStatusColor(
                    status
                  )}`}>
                  {status}
                </span>{" "}
              </td>
              {status === "deny" && <td>Give feedback</td>}
              <td>
                <button className="btn btn-warning mr-3">update</button>
                <button className="btn btn-error">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
