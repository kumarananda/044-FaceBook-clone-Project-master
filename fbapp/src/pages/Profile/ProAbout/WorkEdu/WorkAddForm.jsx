/** @format */

import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
import Duration from "./Duration/Duration.jsx";
import EditAction from "./EditAction/EditAction";
import LabeIInput from "./LabeIInput/LabeIInput";

const WorkAddForm = ({ setAddForm }) => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({ type: "work", show: true, status: "public", isCurrently: true });

  const handlefromChange = e => {
    if (e.target.type === "checkbox") {
      if (!e.target.checked) {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked, daytTo: "", monthTo: "", yearTo: "" }));
      } else {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.checked }));
      }
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
  const handleWorkAdd = e => {
    e.preventDefault();
    if (isUpdateable) {
      dispatch(updateUserData({ ...user, work: [...user.work, formData] }, setAddForm));
    } else {
      alert("Fill Minimum Fileds");
    }
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
        cancelAct={() => setAddForm(false)}
        update={handleWorkAdd}
      />
    </>
  );
};

export default WorkAddForm;
