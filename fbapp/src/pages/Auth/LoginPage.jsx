/** @format */

import React from "react";
import { useState } from "react";
import AuthFooter from "../../components/AuthComponents/AuthFooter";
import Login from "../../components/AuthComponents/Login";
import Register from "../../components/AuthComponents/Register";
import RegisterModal from "../../components/AuthComponents/RegisterModal";

const LoginPage = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      {/* <!-- Facebook Auth Area --> */}
      <div className="fb-auth">
        <div className="auth-right">
          <Login setRegister={setRegister} />
          <p>
            <a href="/">Create a Page</a> for a celebrity, brand or business.
          </p>
        </div>

        {/* </div> */}
      </div>

      {/* <!-- FB FOOTER AREA  --> */}
      <AuthFooter />

      {register && <RegisterModal setRegister={setRegister} />}
    </>
  );
};

export default LoginPage;
