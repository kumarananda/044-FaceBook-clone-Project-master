/** @format */

import React from "react";
import Register from "./Register";
import crouseBtn from "../../_assets/icons/cross.png";

const RegisterModal = ({ setRegister }) => {
  return (
    <>
      {/* <!-- MODAL BOX  --> */}
      <div className="blur-box">
        <div className="sign-up-card">
          <div className="sign-up-header">
            <div className="sign-up-content">
              <span>Sign Up</span>
              <span>It's quick and easy.</span>
            </div>
            <button onClick={() => setRegister(false)}>
              {" "}
              <img src={crouseBtn} alt="" />{" "}
            </button>
          </div>

          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
