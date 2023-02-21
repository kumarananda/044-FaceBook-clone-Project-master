/** @format */

import React from "react";

// import { useSelector } from "react-redux";
import CreatePost from "../../components/UserComponents/CreatePost";

import StoryBox from "../../components/UserComponents/StoryBox";

import PostItem from "../../components/UserComponents/PostItem";
import UserHeader from "../../components/UserComponents/UserHeader/UserHeader";
import Sidebar from "../../components/UserComponents/Sidebar";

const Home = () => {
  // use navigate
  // const navigate = useNavigate();

  // use seclector
  // const { user } = useSelector(state => state.auth);
  // const userFullName = user.first_name + " " + user.surname;

  return (
    <>
      <UserHeader />
      {/* <HeaderSpace /> */}

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
