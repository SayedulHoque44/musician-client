import React from "react";
import useGetClasses from "../../Hooks/useGetClasses";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, refetch, isClassLoading] = useGetClasses(null, "approved");
  // console.log(classes);
  return (
    <div className="py-5">
      <h1 className="uppercase text-3xl text-center">All Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 gap-3">
        {classes.map((card) => (
          <ClassCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
