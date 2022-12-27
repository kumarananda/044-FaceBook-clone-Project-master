/** @format */

import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/UserComponents/CreatePost";
import Sidebar from "../../components/UserComponents/Sidebar";
import StoryBox from "../../components/UserComponents/StoryBox";
import UserAvater from "../../components/UtilityComponents/UserAvater";
import UserHeader from "../../components/UserComponents/UserHeader";
// import fbIcon from "../../_assets/icons/favicon.ico";
import userPng from "../../_assets/images/user.png";
import { Link } from "react-router-dom";
import PostItem from "../../components/UserComponents/PostItem";

const Home = () => {
  // use navigate
  // const navigate = useNavigate();

  // use seclector
  const { user } = useSelector(state => state.auth);

  const userFullName = user.first_name + " " + user.surname;

  return (
    <>
      <UserHeader />
      {/* <!-- FB HOME BODY  --> */}
      <div className="fb-home-body">
        <Sidebar />

        <div className="fb-home-timeline-area">
          <div className="fb-home-timeline">
            <StoryBox />

            {/* <!-- Create Post Box  --> */}
            <CreatePost />

            {/* <!-- User Post  --> */}
            <PostItem />
            <PostItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
