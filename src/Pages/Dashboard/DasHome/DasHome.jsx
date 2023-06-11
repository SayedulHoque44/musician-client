import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import useGetContext from "../../../Hooks/useGetContext";
import useUserRole from "../../../Hooks/useUserRole";

const DasHome = () => {
  const [userRole, userRoleoading] = useUserRole();
  const { user } = useGetContext();
  // console.log(userRole);
  return (
    <div className="overflow-hidden p-10">
      <Slide>
        <h1 className="text-4xl">
          Welcome{" "}
          <span className="text-yellow-500 text-5xl">
            {user.displayName} <span className="uppercase">{userRole}</span>{" "}
          </span>
          !
        </h1>
      </Slide>
      <Fade delay={100} cascade damping={1e-1}>
        Wish You Have A Wounderfull Day!
      </Fade>
    </div>
  );
};

export default DasHome;
