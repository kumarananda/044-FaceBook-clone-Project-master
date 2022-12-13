/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderLogin from "../../../components/HeaderLogin";
import AuthFooter from "../../../components/AuthFooter";
import { useEffect } from "react";
import { linkActivation } from "../../../redux/auth/authAction";

const LinkActivation = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { actResult, message } = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(linkActivation({ token, userId: id }, navigate));
  }, []);

  return (
    <>
      <HeaderLogin />
      {/* <!-- reset Box  --> */}
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-body">
              <div className="act-wraper-box">
                {actResult === "success" && (
                  <div className="success">
                    <div className="reset-box-header">
                      {/* <span className="title">Account activation succesful.</span> */}
                      <span className="title">{message}</span>
                    </div>
                    <div className="reset-body">
                      <p>Login to connect and share with the people in your life </p>{" "}
                    </div>
                  </div>
                )}
                {actResult === "info" && (
                  <div className="info">
                    <div className="reset-box-header">
                      {/* <span className="title">Account already activate.</span> */}
                      <span className="title">{message}</span>
                    </div>
                    <div className="reset-body">
                      <p>Login for explore</p>
                    </div>
                  </div>
                )}
                {actResult === "faild" && (
                  <div className="error">
                    <div className="reset-box-header">
                      <span className="title">{message}</span>
                    </div>
                    <div className="reset-body">
                      <p>If you lost account, please contact support</p>
                    </div>
                  </div>
                )}
                {!actResult && (
                  <div className="">
                    <div className="reset-box-header">
                      <span className="title"></span>
                    </div>
                    <div className="reset-body">
                      <p></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="reset-footer">
              <div className="reset-btns">
                <Link className="cancel" to="/login">
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default LinkActivation;
