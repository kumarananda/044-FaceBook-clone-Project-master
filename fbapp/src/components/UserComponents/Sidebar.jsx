/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserAvater from "../UtilityComponents/UserAvater";
import UserName from "../UtilityComponents/UserName";

const Sidebar = ({ customWidth }) => {
  // use location
  const { pathname } = useLocation();
  // console.log(pathname);

  let barSize = pathname === "/" ? true : false;

  return (
    <>
      <div style={{ position: "fixed", zIndex: "9999999" }} className={`fb-home-body-sidebar ${barSize ? "" : "minimize"}`}>
        <ul>
          <li className="active_border">
            <div className="body-icon">
              <UserAvater />
            </div>
            {barSize && <UserName font_Size={20} />}
          </li>

          <li>
            <Link to="/friends">
              <div className="body-icon"></div>
              {barSize && <span>Friends</span>}
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              {barSize && <span>Groups</span>}
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              {barSize && <span>Marketplace</span>}
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              {barSize && <span>Watch</span>}
            </Link>
          </li>

          <li>
            <Link to="/">
              <div className="body-icon"></div>
              {barSize && <span>Watch</span>}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
