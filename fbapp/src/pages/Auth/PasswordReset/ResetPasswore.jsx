/** @format */

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthFooter from "../../../components/AuthComponents/AuthFooter";
import HeaderLogin from "../../../components/AuthComponents/HeaderLogin";
import exclamationPng from "../../../_assets/images/exclamation.png";
import { handleSetNewPass } from "../../../redux/auth/authAction";

const ResetPassword = () => {
  // use navigate
  const navigate = useNavigate();
  //use dispatch
  const dispatch = useDispatch();

  // get cookie data
  // let find_OTP = Cookies.get("find_OTP");
  let reset_vfy = Cookies.get("reset_vfy");

  useEffect(() => {
    if (!reset_vfy) {
      navigate("/login");
    }
  });
  // password input filded con.
  const [pass, setPass] = useState("");
  const handelPassInput = e => {
    setPass(e.target.value);
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

  // submit new password
  const handleSubmitNewPass = e => {
    e.preventDefault();
    dispatch(handleSetNewPass(pass, reset_vfy, setErrorMsg, setErrBorder, navigate));
  };

  // Skip
  const skipSetNewPass = e => {
    e.preventDefault();
    Cookies.remove("reset_vfy");
    navigate("/login");
  };

  return (
    <>
      <HeaderLogin />
      {/* <!-- reset Box  --> */}
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Choose a new password</span>
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
              <p>
                Create a new password that is at least 6 characters long. A strong password has a combination of letters, digits and punctuation
                marks.
              </p>
              <div className="code-box">
                <input
                  onBlur={errBorderCon}
                  value={pass}
                  onChange={handelPassInput}
                  className={`w-100 ${errBorder ? "error-border" : ""}`}
                  type="text"
                  placeholder="New password"
                />
              </div>
            </div>
            <div className="reset-footer">
              {/* <a href="/"></a> */}
              <div className="reset-btns">
                <a onClick={skipSetNewPass} className="cancel" href="/login">
                  Skip
                </a>
                <a onClick={handleSubmitNewPass} className="continue" href="/">
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default ResetPassword;
