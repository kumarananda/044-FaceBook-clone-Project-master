/** @format */

import React from "react";
import { useSelector } from "react-redux";
import userAvatre from "../../_assets/images/useravatar.png";

const UserAvater = () => {
  const { user } = useSelector(state => state.auth);

  const userPng = user.photo ? user.photo : userAvatre;

  return (
    <span href="/">
      <img src={userAvatre} alt="" />
    </span>
  );
};

export default UserAvater;
