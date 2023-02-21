/** @format */

import React from "react";
import "./Friends.css";
import userImg from "../../../../_assets/images/user.png";
import CardBox from "../../../../components/UtilityComponents/CardBox/CardBox";

const Friends = () => {
  const friends = 1250;
  const seeAll = () => {
    alert("jjj");
  };
  return (
    <>
      <CardBox
        headerJSX={{
          title: "Friends",
          buttonTxt: "See all friends",
          seeAll,
          friends,
        }}
      >
        <div className="friendsBody">
          {/*  */}
          <div className="frendsItem">
            <div className="imgBox">
              <img src={userImg} alt="" />
            </div>
            <a href="/">
              <h5>Ananda</h5>
            </a>
          </div>
          <div className="frendsItem">
            <div className="imgBox">
              <img src={userImg} alt="" />
            </div>
            <a href="/">
              <h5>Ananda</h5>
            </a>
          </div>
          <div className="frendsItem">
            <div className="imgBox">
              <img src={userImg} alt="" />
            </div>
            <a href="/">
              <h5>Ananda</h5>
            </a>
          </div>
          <div className="frendsItem">
            <div className="imgBox">
              <img src={userImg} alt="" />
            </div>
            <a href="/">
              <h5>Ananda</h5>
            </a>
          </div>
          <div className="frendsItem">
            <div className="imgBox">
              <img src={userImg} alt="" />
            </div>
            <a href="/">
              <h5>Ananda</h5>
            </a>
          </div>
          <div className="frendsItem">
            <div className="imgBox">
              <img src={userImg} alt="" />
            </div>
            <a href="/">
              <h5>Ananda</h5>
            </a>
          </div>
          {/*  */}
        </div>
      </CardBox>
    </>
  );
};

export default Friends;
