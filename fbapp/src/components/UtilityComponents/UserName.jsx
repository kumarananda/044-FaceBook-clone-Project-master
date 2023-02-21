/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserName = ({ font_Size }) => {
  // use seclector
  const { user } = useSelector(state => state.auth);

  const userFullName = user.first_name + " " + user.surname;

  // return <span>{userFullName}</span>;
  return (
    <Link to="/profile">
      <span style={{ fontWeight: 800, color: "black", fontSize: `${font_Size ? font_Size + "px" : "20px"}` }}>{userFullName}</span>
    </Link>
  );
};

export default UserName;
