import React from "react";
import Bannar from "./Bannar/Bannar";
import Offer from "./Offer/Offer";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Bannar />
      <PopularClass />
      <PopularInstructor />
      <Offer />
    </div>
  );
};

export default Home;
