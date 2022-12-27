/** @format */

import React from "react";
import { Link } from "react-router-dom";
import UserAvater from "../UtilityComponents/UserAvater";
import UserName from "../UtilityComponents/UserName";

const Sidebar = () => {
  return (
    <>
      <div className="fb-home-body-sidebar">
        <ul>
          <li>
            <Link to="/profile">
              <div className="body-icon">
                <UserAvater />
              </div>

              <UserName />
            </Link>
          </li>

          <li>
            <Link to="/friends">
              <div className="body-icon"></div>
              <span>Friends</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              <span>Groups</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              <span>Marketplace</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              <span>Watch</span>
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              <span>Watch</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
