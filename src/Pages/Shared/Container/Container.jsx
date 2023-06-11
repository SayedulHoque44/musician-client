import React, { useEffect } from "react";
import useGetContext from "../../../Hooks/useGetContext";

const Container = ({ children }) => {
  const { theme } = useGetContext();
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="max-w-[2530px] mx-auto lg:px-20 md:px-10 sm:px-5 px overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
