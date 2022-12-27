/** @format */

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from "../../../components/AuthComponents/AuthFooter";
import HeaderLogin from "../../../components/AuthComponents/HeaderLogin";
import { findForgotUser } from "../../../redux/auth/authAction";
import Cookies from "js-cookie";
import { useEffect } from "react";

const ForgotPass = () => {
  const navigate = useNavigate();
  const find_OTP = Cookies.get("find_OTP");

  useEffect(() => {
    if (find_OTP) {
      navigate("/find-account"); // <FindAccount/>
    }
  });
  // use dispatch
  const dispatch = useDispatch();
  const { actResult } = useSelector(state => state.auth);

  // set error border
  const [erroBorder, setErrorBorder] = useState(false);
  // set input value
  const [search, setSearch] = useState("");
  const handleSearchInput = e => {
    setSearch(e.target.value);
  };

  const handleFindUser = e => {
    e.preventDefault();
    dispatch(findForgotUser(search, setSearch, setErrorBorder, navigate));
  };

  return (
    <>
      <HeaderLogin />
      {/* <!-- reset Box  --> */}
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Find Your Account</span>
            </div>
            {actResult === "not_found" && (
              <div className="forgot-pass-custom">
                <div className="reset-body ">
                  <div className="border-error ">
                    <div className="title">No search results</div>
                    <p className="message">Your search did not return any results. Please try again with other information.</p>
                  </div>
                </div>
              </div>
            )}
            {/* {actResult === "user_found" && <></>} */}
            {actResult === "filed_empty" && (
              <div className="forgot-pass-custom">
                <div className="reset-body ">
                  <div className="border-error ">
                    <div className="title">Please fill in at least one field</div>
                    <p className="message">Fill in at least one field to search for your account</p>
                  </div>
                </div>
              </div>
            )}
            <div className="reset-body">
              <p>Please enter your email address or mobile number to search for your account.</p>
              <div className="code-box">
                <input
                  onChange={handleSearchInput}
                  className={`w-100 ${erroBorder && "borderRed"}`}
                  type="text"
                  placeholder="Email address or mobile number"
                />
              </div>
            </div>

            <div className="reset-footer">
              <div className="reset-btns">
                <Link className="cancel" to="/login">
                  Cancel
                </Link>
                <a onClick={handleFindUser} className="continue" href="/">
                  Search
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

export default ForgotPass;
