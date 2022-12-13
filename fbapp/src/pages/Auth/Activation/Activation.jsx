/** @format */

import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../../../components/AuthFooter";
import HeaderLogin from "../../../components/HeaderLogin";
import { codeActivation, codeResend } from "../../../redux/auth/authAction";
import createTost from "../../../utility/tost";
import { checkCode6 } from "../../../utility/validate";

const Activation = () => {
  //use distatch
  const dispatch = useDispatch();
  // usr navigate
  const navigate = useNavigate();

  let name = null;
  let user = null;
  let token = null;

  // get cookie data
  let act_OTP_serv = Cookies.get("act_OTP");

  //
  useEffect(() => {
    if (!act_OTP_serv) {
      navigate("/login");
    }
  });

  // set user value
  if (act_OTP_serv) {
    const { activeName, activeUser, JwToken } = JSON.parse(act_OTP_serv);
    name = activeName;
    user = activeUser;
    token = JwToken;
  }

  // set code input data
  const [actCode, setActCode] = useState("");
  const handleInput = e => {
    setActCode(e.target.value);
  };

  // handle error border
  const [errBorder, setErrBorder] = useState(false);
  const errBorderCon = e => {
    if (!e.target.value) {
      return setErrBorder(true);
    }
    if (e.target.value) {
      return setErrBorder(false);
    }
  };

  // Handle Activation submit
  const handleActivation = e => {
    if (!actCode) {
      return createTost("Enter security code");
    }
    if (!checkCode6(actCode)) {
      return createTost("Code will be six digit & [0-9]");
    }
    dispatch(codeActivation(actCode, token, setErrBorder, navigate));
  };

  // Handle  cancel activation
  const cancelHandle = e => {
    e.preventDefault();
    let cookie = Cookies.get("act_OTP");
    if (cookie) {
      Cookies.remove("act_OTP");
    }
    navigate("/login");
  };
  // resend activation code
  const handleResendCode = async e => {
    e.preventDefault();

    if (act_OTP_serv) {
      dispatch(codeResend({ token, userType: user }));
    }
  };

  return (
    <>
      <HeaderLogin />
      {/* <!-- reset Box  --> */}
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Enter security code</span>
            </div>
            <div className="reset-body">
              <h5> Hi {name}</h5>
              <p>Please check your emails for a message with your code. Your code is 6 numbers long.</p>
              <div className="code-box">
                <input value={actCode} className={errBorder && `error-border`} onChange={handleInput} onBlur={errBorderCon} type="text" />
                <div className="code-text">
                  <span>We sent your code to </span>
                  <span>{user}</span>
                </div>
              </div>
            </div>
            <div className="reset-footer">
              <a onClick={handleResendCode} href="/">
                Didn't get a code?
              </a>
              <div className="reset-btns">
                <a onClick={cancelHandle} className="cancel" href="/">
                  Cancel
                </a>
                <button onClick={handleActivation} className="continueBtn continue">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthFooter />
    </>
  );
};

export default Activation;
