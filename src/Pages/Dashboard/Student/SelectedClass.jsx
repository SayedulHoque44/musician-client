import React from "react";

const SelectedClass = () => {
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn btn-error">delete</button>
                <button className="btn btn-warning ml-3">Pay</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
