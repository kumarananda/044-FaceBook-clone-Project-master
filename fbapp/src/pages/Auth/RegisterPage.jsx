/** @format */

import React from "react";
import "../../components/AuthComponents/Register.css";
import AuthFooter from "../../components/AuthComponents/AuthFooter.jsx";
import HeaderLogin from "../../components/AuthComponents/HeaderLogin.jsx";
import Register from "../../components/AuthComponents/Register.jsx";
import { Link, useLocation } from "react-router-dom";

const RegisterPage = () => {
  // const location = useLocation();
  // console.log(location);

  return (
    <>
      <HeaderLogin />
      {/* <!-- MODAL BOX  --> */}
      {/* <div className="blur-box"> */}
      <div className="sign-up-card-reg-page">
        <div className="sign-up-header">
          <div className="sign-up-content">
            <span>Sign Up</span>
            <span>It's quick and easy.</span>
          </div>
          <button>
            <Link to="/">Back to login</Link>{" "}
          </button>
        </div>

        <Register />
      </div>

      <AuthFooter />
    </>
  );
};

export default RegisterPage;
