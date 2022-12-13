/** @format */

import React from "react";
import { useState } from "react";
import AuthFooter from "../../components/AuthFooter";
import Login from "../../components/Login";
import Register from "../../components/Register";
import FBlogo from "../../_assets/icons/facebook.svg";

const Auth = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      {/* <!-- Facebook Auth Area --> */}
      <div className="fb-auth">
        <div className="auth-wraper">
          <div className="auth-left">
            <img src={FBlogo} alt="" />
            <h2>Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="auth-right">
            <Login setRegister={setRegister} />
            <p>
              <a href="/">Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- FB FOOTER AREA  --> */}
      <AuthFooter />

      {register && <Register setRegister={setRegister} />}
    </>
  );
};

export default Auth;
