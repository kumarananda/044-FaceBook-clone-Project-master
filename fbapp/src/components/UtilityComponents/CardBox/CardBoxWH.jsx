/** @format */

import React from "react";
import "./CardBox.css";

const CardBoxWH = ({ children, widt, bgc, cPading, headerJSX }) => {
  return (
    <>
      <div
        className="cardBoxWP "
        style={{
          padding: `${cPading ? cPading + "px" : "12px"}`,
          overflow: "hidden",
          width: `${widt ? widt + "px" : "100%"}`,
          backgroundColor: `${bgc ? bgc : "#fff"}`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default CardBoxWH;

// padding: `12px`,
