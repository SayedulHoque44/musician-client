import React from "react";
import useGetContext from "../../../Hooks/useGetContext";
import usePaidClasses from "../../../Hooks/usePaidClasses";

const PaymentHistory = () => {
  const { user } = useGetContext();
  const [Paidclasses, refetch, isClassLoading] = usePaidClasses(user?.email);
  console.log(Paidclasses);
  return (
    <div>
      <h1 className="uppercase text-3xl text-center">payment History</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>User Email</th>
              <th>Transaction Id</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Paidclasses.map((item, index) => (
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
                <td>{item.email}</td>

                <td>{item.transactionId}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
