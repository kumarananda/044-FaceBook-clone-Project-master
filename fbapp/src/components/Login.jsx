/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogin } from "../redux/auth/authAction";
import exclamation_red from "../_assets/images/exclamation-red.png";

const Login = ({ setRegister }) => {
  // use dispatch
  const dispatch = useDispatch();

  // login input filde value
  const [logIn, setLogIn] = useState({ emailOrPhone: "", password: "" });
  const handleLoginValue = e => {
    setLogIn(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // error border control
  const [errBorder, setErrBorder] = useState({ emailOrPhone: false, password: false });
  // const handleErrBorder = e => {
  //   if (!e.target.value) {
  //     setErrBorder(prev => ({ ...prev, [e.target.name]: true }));
  //   } else {
  //     setErrBorder(prev => ({ ...prev, [e.target.name]: false }));
  //   }
  // };
  // error mesg
  const [errmsg, setErrmsg] = useState({ emailOrPhone: false, password: false });

  console.log(errmsg);

  //handle login submit
  const handleLoginSubmit = e => {
    e.preventDefault();

    dispatch(handleLogin(logIn, setErrBorder, setErrmsg));
  };

  return (
    <>
      <div className="auth-box">
        <form onSubmit={handleLoginSubmit} action="">
          <div className="input-wraper">
            <div className="auth-form code-box">
              <input
                // onBlur={handleErrBorder}
                className={`w-100 ${errBorder.emailOrPhone ? "borderRed" : ""}`}
                onChange={handleLoginValue}
                value={logIn.emailOrPhone}
                name="emailOrPhone"
                type="text"
                placeholder="Email address or phone number"
              />
            </div>

            {errmsg.emailOrPhone && (
              <>
                <div className="errorMess">Email address or mobile number in required.</div>
              </>
            )}
            {errBorder.emailOrPhone && (
              <>
                <div className="errImgBox">
                  <img src={exclamation_red} alt="" />
                </div>
                <div className="errorMess">
                  The email address or mobile number you entered isn't connected to an account. <Link to={"/"}>Find your account and log in.</Link>
                </div>
              </>
            )}
          </div>
          <div className="input-wraper">
            <div className="auth-form code-box">
              <input
                // onBlur={handleErrBorder}
                className={`w-100 ${errBorder.password ? "borderRed" : ""}`}
                onChange={handleLoginValue}
                value={logIn.password}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            {errmsg.password && (
              <>
                <div className="errorMess">Password filed is empty.</div>
              </>
            )}
            {errBorder.password && (
              <>
                <div className="errorMess">
                  The password that you've entered is incorrect. <Link to={"/"}>Forgotten password?</Link>
                </div>
              </>
            )}
          </div>

          <div className="auth-form">
            <button type="submit">Log In</button>
          </div>
        </form>

        <Link to="/forgot-password">Forgotten password?</Link>

        <div className="divider"></div>

        <button onClick={() => setRegister(true)}>Create New Account</button>
      </div>
    </>
  );
};

export default Login;

// <img class="_9ay6 img" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/O287_AcFyg4.png" alt="" width="20" height="20">
// The email address or mobile number you entered isn't connected to an account. <a href="https://facebook.com/login/identify/">Find your account and log in.</a>
// The password that you've entered is incorrect. Forgotten password?
