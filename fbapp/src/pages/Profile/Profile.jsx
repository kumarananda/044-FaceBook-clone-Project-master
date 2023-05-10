/** @format */

import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Outlet } from "react-router-dom";
import UserHeader from "../../components/UserComponents/UserHeader/UserHeader";
import Sidebar from "../../components/UserComponents/Sidebar";
import ProHomePosts from "./ProHomePosts/ProHomePosts";
import PopUpFullWidth from "../../components/UtilityComponents/PopUpFullWidth/PopUpFullWidth";

const Profile = () => {
  return (
    <>
      <UserHeader />
      {/* <div className="bodyWraper">
        <div className="leftSideBar"></div>
        <div className="medileContent"></div>
        <div className="rightSideBar"></div>
      </div>; */}

      {/* <!-- FB HOME BODY  --> */}
      <div className="fb-home-body">
        <Sidebar customWidth={50} />
        <ProfileHeader />
      </div>
      <Outlet>
        <ProHomePosts />
      </Outlet>
    </>
  );
};

export default Profile;
