/** @format */

import React from "react";
import "./PopUpFullWidth.css";

import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import { RiFacebookFill } from "react-icons/ri";
import HeaderRightManu from "../../UserComponents/UserHeader/HeaderRightManu";

const PopUpFullWidth = ({ children, setShow }) => {
  return (
    <>
      <div className="PopUpFullWidthWraper">
        <div className="pupCloseBtn">
          <button onClick={() => setShow(false)} title="Press Esc to close">
            <GrFormClose style={{ width: "30px", height: "30px" }} />
          </button>
          <Link to="/">
            <div className="fbicon">
              <RiFacebookFill />
            </div>
          </Link>
        </div>
        <div className="userSec">
          <HeaderRightManu />
        </div>
        {children}
      </div>
    </>
  );
};

export default PopUpFullWidth;
