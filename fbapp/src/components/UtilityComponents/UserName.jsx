/** @format */

import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  // use seclector
  const { user } = useSelector(state => state.auth);

  const userFullName = user.first_name + " " + user.surname;

  return <span>{userFullName}</span>;
};

export default UserName;
