/** @format */

import React, { useState } from "react";
import "./ProfileHeader.css";
import { Link } from "react-router-dom";
import UserAvater from "../../../components/UtilityComponents/UserAvater";
import UserName from "../../../components/UtilityComponents/UserName";
import ProfilePhotoUpdate from "./ProfilePhotoUpdate/ProfilePhotoUpdate";
import BtnCamaraIcon from "../../../components/UtilityComponents/BtnCamaraIcon/BtnCamaraIcon";
import CoverPhotoUdate from "./CoverPhotoUdate/CoverPhotoUdate";

const ProfileHeader = () => {
  const [ppModal, setPpModal] = useState(false);

  return (
    <>
      <div className="fb-profile-body">
        <div className="fb-profile-header">
          {/* <!-- Cover Photo  --> */}
          <CoverPhotoUdate />

          <ProfilePhotoUpdate modalOpen={ppModal} setModalOpen={setPpModal} />
          <div className="fb-profile-details">
            <div className="profile-info">
              <div className="profile-photo profile-photo-position">
                <UserAvater />
                <div onClick={() => setPpModal(true)} className="update-control-btn">
                  <BtnCamaraIcon />
                </div>
              </div>

              <div className="profile-desc">
                <h1>
                  <UserName />
                </h1>
                <div className="profile-follow-details">
                  <span className="profile-followers">15k follower</span>
                  <span className="profile-following">1k following</span>
                </div>
                <div className="profile-friends-list">
                  <ul>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="profile-action">
              <button>
                <span className="follow-icon"></span> <span>Follow</span>
              </button>
              <button>
                <span className="message-icon"></span> <span>Message</span>
              </button>
              <button>
                <span className="add-friend-icon"></span> <span>Add friend</span>
              </button>
            </div>
          </div>
          <div className="fb-profile-menu">
            <ul>
              <li>
                <Link to="/profile">Posts</Link>
              </li>
              <li>
                <Link to="/profile/about">About</Link>
              </li>
              <li>
                <a href="/">Followers</a>
              </li>
              <li>
                <a href="/">Photos</a>
              </li>
              <li>
                <a href="/">Videos</a>
              </li>
              <li>
                <a href="/">Articlse</a>
              </li>
              <li>
                <a href="/">More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
