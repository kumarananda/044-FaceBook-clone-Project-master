/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userAvatre from "../../_assets/images/useravatar.png";

const UserAvater = () => {
  const { user } = useSelector(state => state.auth);
  const userPng = user.profile_photo ? `/profile/${user.profile_photo}` : userAvatre;

  return (
    <Link to="/profile">
      <img src={userPng} alt="fd" />
    </Link>
  );
};

export default UserAvater;
