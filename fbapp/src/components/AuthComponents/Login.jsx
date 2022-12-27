/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../redux/auth/authAction";
import exclamation_red from "../../_assets/images/exclamation-red.png";
import view from "../../_assets/images/view.png";
import invisible from "../../_assets/images/invisible.png";

const Login = ({ setRegister }) => {
  // use dispatch
  const dispatch = useDispatch();
  // use navigate
  const navigate = useNavigate();

  // login input filde value
  const [logIn, setLogIn] = useState({ emailOrPhone: "", password: "" });
  const handleLoginValue = e => {
    setLogIn(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // error border control
  const [errBorder, setErrBorder] = useState({ emailOrPhone: false, password: false });

  // error mesg
  const [errmsg, setErrmsg] = useState({ emailOrPhone: false, password: false });

  // contorl Show hide password
  const [passShow, setPassShow] = useState(false);
  const handlePassShow = e => {
    e.preventDefault();
    setPassShow(true);
  };
  const handlePassHide = e => {
    e.preventDefault();
    setPassShow(false);
  };
  // pass control

  // console.log(errmsg);

  const handleFildBlur = e => {
    if (logIn.emailOrPhone) {
      setErrmsg(prev => ({ ...prev, emailOrPhone: false }));
    }
    if (logIn.password) {
      setErrmsg(prev => ({ ...prev, password: false }));
    }
  };

  //handle login submit
  const handleLoginSubmit = e => {
    e.preventDefault();
    dispatch(handleLogin(logIn, setErrBorder, navigate, setErrmsg));
  };

  return (
    <>
      <div className="auth-box">
        <form onSubmit={handleLoginSubmit} action="">
          <div className="input-wraper-pass">
            <label className={`input-box ${errBorder.emailOrPhone ? "borderRed" : ""}`}>
              <input
                // onBlur={handleErrBorder}
                onChange={handleLoginValue}
                onBlur={handleFildBlur}
                value={logIn.emailOrPhone}
                name="emailOrPhone"
                placeholder="Email address or phone number"
                type="text"
              />
              {errBorder.emailOrPhone && (
                <span className="pass-show ">
                  <a
                    onClick={e => {
                      e.preventDefault();
                    }}
                    href="/"
                    role="button"
                  >
                    <img src={exclamation_red} alt="" />
                  </a>
                </span>
              )}
            </label>

            {errBorder.emailOrPhone && (
              <>
                <div className="errorMess">
                  The email address or mobile number you entered isn't connected to an account.{" "}
                  <Link to={"/forgot-password"}>Find your account and log in.</Link>
                </div>
              </>
            )}
          </div>

          <div className="input-wraper-pass">
            <label className={`input-box ${errBorder.password ? "borderRed" : ""}`}>
              <input
                // onBlur={handleErrBorder}
                onChange={handleLoginValue}
                onBlur={handleFildBlur}
                value={logIn.password}
                name="password"
                placeholder="Password"
                type={!passShow ? "password" : "text"}
              />
              {logIn.password && (
                <span className="pass-show ">
                  <a onClick={passShow ? handlePassHide : handlePassShow} href="/" role="button">
                    <img src={passShow ? invisible : view} alt="" />
                  </a>
                </span>
              )}
            </label>

            {errBorder.password && (
              <>
                <div className="errorMess">
                  The password that you've entered is incorrect. <Link to={"/forgot-password"}>Forgotten password?</Link>
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
