/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeaderLogin from "../../../components/AuthComponents/HeaderLogin";
import AuthFooter from "../../../components/AuthComponents/AuthFooter";
import { useEffect } from "react";
import { resetPassLinkVfy } from "../../../redux/auth/authAction";
import { useState } from "react";

const ResetLinkVrify = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const [msg, setMsg] = useState({ status: false, title: "", type: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetPassLinkVfy(id, token, setMsg, navigate));
  }, []);

  return (
    <>
      <HeaderLogin />
      {/* <!-- reset Box  --> */}
      <div className="reset-area">
        <div className="reset-wraper">
          {msg.status && (
            <div className="reset-box">
              <div className="reset-body">
                <div className="act-wraper-box">
                  <div className="error">
                    <div className="reset-box-header">
                      <span className="title">{msg.title}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reset-footer">
                <div className="reset-btns">
                  <Link className="cancel" to="/login">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          )}
          {!msg.status && (
            <>
              <div className="reset-box">
                <div className="reset-body">
                  <div className="act-wraper-box">
                    <div className="title">
                      <h4 style={{ padding: "20px" }}>Please wait...</h4>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default ResetLinkVrify;
