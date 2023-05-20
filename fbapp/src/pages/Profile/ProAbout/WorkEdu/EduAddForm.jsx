/** @format */

import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
import Duration from "./Duration/Duration.jsx";
import EditAction from "./EditAction/EditAction";
import LabeIInput from "./LabeIInput/LabeIInput";

const EduAddForm = ({ setAddForm }) => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({ type: "education", show: true, status: "public", isGraduated: true });

  const handlefromChange = e => {
    if (e.target.type === "checkbox") {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  // eduInstitute

  let isUpdateable = false;
  if (!formData?.eduInstitute) {
    isUpdateable = false;
  } else {
    isUpdateable = true;
  }

  // data update
  const handleEduAdd = e => {
    e.preventDefault();
    if (isUpdateable) {
      dispatch(updateUserData({ ...user, education: [...user.education, formData] }, setAddForm));
    } else {
      alert("Must fill requird fileds");
    }
  };

  return (
    <>
      <div>
        <LabeIInput placeholder="College or School" value={formData?.eduInstitute} inputChange={handlefromChange} name="eduInstitute" />
      </div>
      <Duration handlefromChange={handlefromChange} formData={formData} isToFix={true} durationFor={"education"} />

      <LabeIInput placeholder="Subject" value={formData?.sub} inputChange={handlefromChange} name="sub" />
      <LabeIInput placeholder="Description" value={formData?.desc} inputChange={handlefromChange} name="desc" type="textarea" />
      <EditAction
        handlefromChange={handlefromChange}
        formData={formData}
        isUpdateable={isUpdateable}
        cancelAct={() => setAddForm(false)}
        update={handleEduAdd}
      />
    </>
  );
};

export default EduAddForm;
