/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
import Duration from "./Duration/Duration.jsx";
import EditAction from "./EditAction/EditAction";
import LabeIInput from "./LabeIInput/LabeIInput";

const WorkEditForm = ({ setEditForm, editIndex, data }) => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({ type: "work", show: true, status: "public", isCurrently: true, ...data });

  const handlefromChange = e => {
    if (e.target.type === "checkbox") {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let isUpdateable = false;
  if (!formData?.company) {
    isUpdateable = false;
  } else if (formData?.company && !formData.isCurrently && !formData.yearTo) {
    isUpdateable = false;
  } else {
    isUpdateable = true;
  }

  // data update
  const handleWorkEdit = e => {
    e.preventDefault();
    user.work.splice(editIndex, 1, formData);
    dispatch(updateUserData({ ...user, work: user.work }, setEditForm));
  };

  return (
    <>
      <div>
        <LabeIInput placeholder="Company" value={formData?.company} inputChange={handlefromChange} name="company" />
        <LabeIInput placeholder="Position" value={formData?.post} inputChange={handlefromChange} name="post" />
        <LabeIInput placeholder="City" value={formData?.city} inputChange={handlefromChange} name="city" />
        <LabeIInput placeholder="Description" value={formData?.desc} inputChange={handlefromChange} name="desc" type="textarea" />
      </div>
      <Duration handlefromChange={handlefromChange} formData={formData} />
      <EditAction
        handlefromChange={handlefromChange}
        formData={formData}
        isUpdateable={isUpdateable}
        cancelAct={() => setEditForm(false)}
        update={handleWorkEdit}
      />
    </>
  );
};

export default WorkEditForm;
