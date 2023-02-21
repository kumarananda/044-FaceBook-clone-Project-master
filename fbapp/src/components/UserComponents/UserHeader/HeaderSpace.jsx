/** @format */

import React from "react";

export const HeaderSpace = () => {
  return <div className="header-space">HeaderSpace</div>;
};
export const SideBarSpace = ({ customWidth }) => {
  return <div style={{ width: `${customWidth ? customWidth + "px" : "50px"}` }} className="sideBarSpace"></div>;
};
