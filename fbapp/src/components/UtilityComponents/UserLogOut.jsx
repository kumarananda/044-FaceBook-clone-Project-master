/** @format */

import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { USER_LOGOUT } from "../../redux/auth/actionType";

const UserLogOut = ({ children }) => {
  // get login token
  const authToken = Cookies.get("authToken");

  // use dispatch
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogout = e => {
    e.preventDefault();
    if (authToken) {
      Cookies.remove("authToken");
    }
    dispatch({
      type: USER_LOGOUT,
    });
    // navigate("/login");
  };

  return (
    <>
      <a onClick={handleLogout} href="/">
        {children}
      </a>
    </>
  );
};

export default UserLogOut;
