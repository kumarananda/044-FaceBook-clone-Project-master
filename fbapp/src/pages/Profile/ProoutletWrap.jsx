/** @format */

import React from "react";

const ProOutletWrap = ({ children }) => {
  return (
    <>
      <div className="profile_page_body">
        <div className="profile_page_Wraper ">{children}</div>
      </div>
    </>
  );
};

export default ProOutletWrap;
