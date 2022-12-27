/** @format */

import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../../../components/AuthComponents/AuthFooter";
import HeaderLogin from "../../../components/AuthComponents/HeaderLogin";
import { resetCodeMatch } from "../../../redux/auth/authAction";
import { phoneEmailHide } from "../../../utility/helper";
import createTost from "../../../utility/tost";
import { checkNumber, validateEmail } from "../../../utility/validate";
import exclamationPng from "../../../_assets/images/exclamation.png";

const ResetCodeMatch = () => {
  //use distatch
  const dispatch = useDispatch();
  // use navigate
  const navigate = useNavigate();

  // get cookie data
  let find_OTP = Cookies.get("find_OTP");
  let resetToken = Cookies.get("resetToken");

  useEffect(() => {
    if (!find_OTP || !resetToken) {
      navigate("/login");
    }
  });

  let user = {};
  if (find_OTP) {
    user = JSON.parse(find_OTP);
  }

  let reset_data = {};
  if (resetToken) {
    reset_data = JSON.parse(resetToken);
  }

  // set user value
  // const { fullName, email, phone, search } = user;
  // const { withRecover, reset_token } = reset_data;
  const { email, phone, search } = user;
  const { withRecover } = reset_data;

  const searchIfNum = checkNumber(search);
  const searchIfEmail = validateEmail(search);
  const searchWith = searchIfNum ? "phone" : searchIfEmail ? "email" : "";
  const dataHide = withRecover !== searchWith;
  const sendto = withRecover === "phone" ? phone : withRecover === "email" ? email : "";

  console.log(user);

  // set code input data
  const [resetCode, setResetCode] = useState("");
  const handleInput = e => {
    setResetCode(e.target.value);
  };

  // show error msg
  const [errorMsg, setErrorMsg] = useState({
    status: false,
    msg: "",
  });

  // handle error border ..
  const [errBorder, setErrBorder] = useState(false);
  const errBorderCon = e => {
    if (!e.target.value) {
      return setErrBorder(true);
    }
    if (e.target.value) {
      return setErrBorder(false);
    }
  };

  // Handle Reset submit
  const handleReset = e => {
    dispatch(resetCodeMatch(resetCode, resetToken, setErrBorder, navigate, setErrorMsg));
  };

  // Handle  cancel activation
  const cancelHandle = e => {
    e.preventDefault();
    let cookie = Cookies.get("resetToken");
    if (cookie) {
      Cookies.remove("resetToken");
    }
    navigate("/login");
  };

  // resend activation code
  const handleResendCode = async e => {
    e.preventDefault();

    if (find_OTP) {
      //   dispatch(codeResend({ token, userType: user }));
      try {
        await axios
          .post("/api/v1/user/forgot-password", { recoverID: sendto, withRecover })
          .then(res => {
            createTost(res.data.message, "success");
            // navigate("/reset-code-match");
          })
          .catch(error => {
            createTost(error.response.data.message);
            console.log(error.response.data.message);
          });
      } catch (error) {
        createTost(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
  };

  // // get code vai phone or email
  // const handleGetForgotPassRef = async e => {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post("/api/v1/user/forgot-password", { recoverID: auth, withRecover: radio })
  //       .then(res => {
  //         createTost(res.data.message, "success");
  //         navigate("/reset-code-match");
  //       })
  //       .catch(error => {
  //         createTost(error.response.data.message);
  //         console.log(error.response.data.message);
  //       });
  //   } catch (error) {
  //     createTost(error.response.data.message);
  //     console.log(error.response.data.message);
  //   }
  // };

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
              <div className="error-msg-box">
                {errorMsg.status && (
                  <div className="msg-box">
                    <img src={exclamationPng} alt="" />
                    <div className="err-msg">{errorMsg.msg}</div>
                  </div>
                )}
              </div>
              <p>Please check your emails for a message with your code. Your code is 6 numbers long.</p>
              <div className="code-box">
                <input
                  value={resetCode}
                  className={errBorder ? `error-border` : ""}
                  onChange={handleInput}
                  onBlur={errBorderCon}
                  placeholder="Enter code"
                  type="text"
                />
                <div className="code-text">
                  <span style={{ display: "block" }}>We sent your code to: </span>
                  <span style={{ display: "block", textAlign: "center" }}>{dataHide ? phoneEmailHide(sendto) : sendto}</span>
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
                <button onClick={handleReset} className="continueBtn continue">
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

export default ResetCodeMatch;
