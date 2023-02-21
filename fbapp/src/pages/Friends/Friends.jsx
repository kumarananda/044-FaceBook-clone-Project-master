/** @format */

import React from "react";
import PostItem from "../../components/UserComponents/PostItem";
import UserHeader from "../../components/UserComponents/UserHeader/UserHeader";

const Friends = () => {
  return (
    <>
      <div className="body">
        <UserHeader />
        <div className="bodyWraper">
          <div style={{ width: `20%` }} className="leftSideBar">
            <div className="sideWraper">
              <div className="leftbarFixed">fdsfdsf</div>
            </div>
          </div>
          <div style={{ width: `60%` }} className="medileContent">
            <div className="medileWraper">
              {/*  */}
              <PostItem />
            </div>
          </div>
          <div style={{ width: `20%` }} className="rightSideBar">
            <div className="rightWraper">
              <div className="rightBarFixed">element</div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Friends;
