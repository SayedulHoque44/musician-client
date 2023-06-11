import React from "react";
import Bannar from "./Bannar/Bannar";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Bannar />
      <PopularClass />
      <PopularInstructor />
    </div>
  );
};

export default Home;
