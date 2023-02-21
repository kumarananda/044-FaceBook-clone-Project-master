/** @format */

import React from "react";
import CarouselNew from "../components/UtilityComponents/CorouselNew/CarouselNew";
import "./CorouselPage.css";

const CorouselPage = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <div className="box" style={{ margin: "auto", width: "600px", minHeight: "300px", border: "1px solid #000" }}>
        <CarouselNew />
      </div>
    </div>
  );
};

export default CorouselPage;
