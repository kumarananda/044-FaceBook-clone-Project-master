/** @format */

import React from "react";
import AuthFooter from "../../../components/AuthComponents/AuthFooter";
import HeaderLogin from "../../../components/AuthComponents/HeaderLogin";
import uaerAvater from "../../../_assets/images/useravatar.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { checkNumber, validateEmail } from "../../../utility/validate.js";
import { phoneEmailHide } from "../../../utility/helper";
import axios from "axios";
import createTost from "../../../utility/tost";

const FindAccount = () => {
  // use navigate
  const navigate = useNavigate();

  // get cookies data
  const getFindUser = Cookies.get("find_OTP");

  //if not get cookies data
  useEffect(() => {
    if (getFindUser === undefined || !getFindUser) {
      navigate("/login");
    }
  });

  let user = {};
  if (getFindUser) {
    user = JSON.parse(getFindUser);
  }

  // handle Cancel
  const handleCancel = () => {
    if (Cookies.get("find_OTP")) {
      Cookies.remove("find_OTP");
      navigate("/forgot-password");
    }
  };

  const checkMail = validateEmail(user.search);
  const checkPhone = checkNumber(user.search);

  const checkType = checkMail ? "email" : checkPhone ? "phone" : "";

  const [radio, setRadio] = useState(checkType);

  // // handle code req with phone or mail
  const auth = radio === "email" ? user.email : radio === "phone" ? user.phone : "";

  console.log(auth);
  console.log(radio);

  const handleFildChecked = e => {
    setRadio(e.target.value);
  };

  // get code vai phone or email
  const handleGetForgotPassRef = async e => {
    e.preventDefault();
    try {
      await axios
        .post("/api/v1/user/forgot-password", { recoverID: auth, withRecover: radio })
        .then(res => {
          createTost(res.data.message, "success");
          navigate("/reset-code-match");
        })
        .catch(error => {
          createTost(error.response.data.message);
          console.log(error.response.data.message);
        });
    } catch (error) {
      createTost(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <HeaderLogin />
      {/* <!-- reset Box  --> */}
      <div className="reset-area find-account">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Reset your password</span>
            </div>
            <div className="user-data-body">
              <div className="reset " style={{ width: "55%" }}>
                <div className="find-user-data">
                  <div className="auth-title">How do you want to receive the code to reset your password?</div>
                  <div className="send-ref">
                    {user.email && (
                      <label className={radio === "email" ? "search-data" : ""}>
                        <input onChange={handleFildChecked} value="email" name="authtype" type="radio" checked={radio === "email" ? true : false} />
                        <span>
                          <p className="msg">Send code via email</p>
                          <p className="data">{checkMail ? user.email : phoneEmailHide(user.email)}</p>
                        </span>
                      </label>
                    )}
                    {user.phone && (
                      <label className={radio === "phone" ? "search-data" : ""}>
                        <input onChange={handleFildChecked} value="phone" name="authtype" type="radio" checked={radio === "phone" ? true : false} />
                        <span>
                          <p className="msg">Send code via SMS</p>
                          <p className="data">{checkPhone ? user.phone : phoneEmailHide(user.phone)}</p>
                        </span>
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <div className="reset-body" style={{ width: "45%" }}>
                <div className="find-user-account">
                  <img src={user.photo ? user.photo : uaerAvater} alt="" />
                  <span>{user.fullName}</span>
                  <p>Facebook user</p>
                </div>
              </div>
            </div>
            {/* <div className="user-data-body">
              <div className="reset-body ">
                <p className="text">To reset your account password, please continue</p>
              </div>
            </div> */}

            <div className="reset-footer">
              <div className="reset-btns">
                <button onClick={handleCancel} className="cancel">
                  Not you ?
                </button>
                <a onClick={handleGetForgotPassRef} className="continue" href="/">
                  Continue
                </a>
              </div>
              <a href="/login">No longer have access to these?</a>
            </div>
          </div>
        </div>
      </div>

      <AuthFooter />
    </>
  );
};

export default FindAccount;
