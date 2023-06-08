import React from "react";

const EnrolledClass = () => {
  let status = "paid";
  return (
    <div>
      <h1 className="uppercase text-3xl text-center">Enrolled Classes</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Instructor Name & Email</th>

              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Instructor Name
                <br />
                <span className="badge badge-ghost badge-sm">
                  Instructor Email
                </span>
              </td>

              <td className="text-right">$price</td>
              <td>
                {" "}
                <span
                  className={`badge badge-ghost badge-sm text-white bg-success`}>
                  {status === "paid" && "Paid"}
                </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
