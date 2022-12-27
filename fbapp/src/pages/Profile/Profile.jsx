/** @format */

import React from "react";
import CreatePost from "../../components/UserComponents/CreatePost";
import PostItem from "../../components/UserComponents/PostItem";
import Sidebar from "../../components/UserComponents/Sidebar";
import UserHeader from "../../components/UserComponents/UserHeader";

const Profile = () => {
  return (
    <>
      <UserHeader />
      {/* <!-- FB HOME BODY  --> */}
      <div className="fb-home-body">
        <Sidebar />

        <div className="fb-home-timeline-area">
          <div className="fb-home-timeline">
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

export default Profile;
