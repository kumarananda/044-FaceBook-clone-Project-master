/** @format */

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AuthFooter from "../../components/AuthComponents/AuthFooter";
import Login from "../../components/AuthComponents/Login";
import Register from "../../components/AuthComponents/Register";
import FBlogo from "../../_assets/icons/facebook.svg";
import crouseBtn from "../../_assets/icons/cross.png";
import RegisterModal from "../../components/AuthComponents/RegisterModal";

const Auth = () => {
  const [register, setRegister] = useState(false);

  const params = useParams();
  console.log(params);

  return (
    <>
      {/* <!-- Facebook Auth Area --> */}
      <div className="fb-auth">
        <div className="auth-wraper">
          <div className="auth-left">
            <img src={FBlogo} alt="" />
            <h2>Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="auth-right">
            <Login setRegister={setRegister} />
            <p>
              <a href="/">Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- FB FOOTER AREA  --> */}
      <AuthFooter />

      {/* {register && <Register setRegister={setRegister} />} */}

      {register && <RegisterModal setRegister={setRegister} />}
    </>
  );
};

export default Auth;
