import React from "react";

import { Slide } from "react-awesome-reveal";
import Deck from "../Test/Deck";
import styles from "../Test/style.module.css";

const Offer = () => {
  return (
    <div className="overflow-hidden" id="offer">
      <h1 className="my-3 text-4xl text-center"> Our 30% Off Classes</h1>
      <Slide direction={"right"}>
        <div className="py-20 min-h-screen flex items-center justify-center ">
          <div className={styles.container}>
            <Deck />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Offer;
