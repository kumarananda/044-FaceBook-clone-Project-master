/** @format */

import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
import Duration from "./Duration/Duration.jsx";
import EditAction from "./EditAction/EditAction";
import LabeIInput from "./LabeIInput/LabeIInput";

const EduEditForm = ({ setEditForm, editIndex, data }) => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({ type: "education", show: true, status: "public", isGraduated: true, ...data });

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
  const handleEduEdit = e => {
    e.preventDefault();
    user.education.splice(editIndex, 1, formData);
    if (isUpdateable) {
      dispatch(updateUserData({ ...user, education: user.education }, setEditForm));
    } else {
      alert("Fill Minimum Fileds");
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
        cancelAct={() => setEditForm(false)}
        update={handleEduEdit}
      />
    </>
  );
};

export default EduEditForm;
