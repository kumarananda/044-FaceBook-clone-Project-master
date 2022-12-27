/** @format */

import React from "react";
import UserAvater from "../UtilityComponents/UserAvater";

const CreatePost = () => {
  return (
    <>
      {/* <!-- Create Post Box  --> */}
      <div className="create-post">
        <div className="create-post-header">
          <UserAvater />
          {/* <img src={userPng} alt="" /> */}
          <button>Whats on your mind ?</button>
        </div>
        <div className="divider-0"></div>
        <div className="create-post-footer">
          <ul>
            <li>
              <div className="post-icon"></div>
              <span>Live Video</span>
            </li>
            <li>
              <div className="post-icon"></div>
              Photo/video
            </li>
            <li>
              <div className="post-icon"></div>
              Feeling/ctivity
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
