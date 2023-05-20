/** @format */

import React from "react";

const CoverPhoto = () => {
  return (
    <>
      <div className="fb-header-shad"></div>
      <div
        className="fb-cover-photo"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg")`,
        }}
      ></div>

      <div className="coverUpdateBtn" style={{ zIndex: 2 }}>
        <input onChange={null} id="cover-Upload" type="file" hidden />
        <label>{"Edit cover photo"}</label>
      </div>
    </>
  );
};

export default CoverPhoto;
