/** @format */

import React from "react";
import "./PothoGalary.css";
import userImg from "../../../../_assets/images/user.png";
import CardBox from "../../../../components/UtilityComponents/CardBox/CardBox";

const PothoGalary = () => {
  const seeAll = () => {
    alert("jjj");
  };
  return (
    <>
      <CardBox
        headerJSX={{
          title: "Photos",
          buttonTxt: "See all photos",
          seeAll,
        }}
      >
        <div className="potho_galary">
          <div className="pg_body">
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
            <div className="pg_img">
              <a href="/">
                <img src={userImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default PothoGalary;
