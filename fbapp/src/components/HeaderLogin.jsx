/** @format */

import fbLogo from "../_assets/icons/facebook.svg";
import React from "react";

const HeaderLogin = () => {
  return (
    <>
      {/* <!-- Facebook Auth Area --> */}
      <div className="reset-header">
        <div className="reset-header-wraper">
          <div className="reset-logo">
            <img src={fbLogo} alt="" />
          </div>
          <div className="login-part">
            <input type="text" placeholder="Email or mobile number" />
            <input type="text" placeholder="Password" />
            <button>Log In</button>
            <a target={"_blank"} href="/forgot-password">
              Forgotten account?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogin;
