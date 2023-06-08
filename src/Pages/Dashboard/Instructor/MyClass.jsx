import React from "react";

const MyClass = () => {
  const denied = true;
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
              {denied && <td>Feedback</td>}
              <th>Update Or Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              {denied && <td>Feedback</td>}
              <td>
                <button className="btn">update</button>
                <button className="btn">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
