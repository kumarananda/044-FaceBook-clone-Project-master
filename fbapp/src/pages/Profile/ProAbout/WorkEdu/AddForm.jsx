/** @format */

import React, { useState } from "react";
import { MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
import LableI_Input from "./LableI_Input/LableI_Input";
import Duration from "./Duration/Duration.jsx";

const AddForm = ({ setAddForm }) => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);
  console.log(user.work);
  const [formData, setFormData] = useState({ type: "work", show: true, status: "public" });

  let input = { width: "100%", padding: "5px", fontSize: "16px" };

  const handlefromChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // data update
  const handleWorkAdd = e => {
    e.preventDefault();
    // dispatch(updateUserData({ ...user, work: [...work, formData] }, setAddForm));
  };

  return (
    <>
      <div>
        <LableI_Input placeholder="Company" value={formData?.company} inputChange={handlefromChange} name="company" />
        <LableI_Input placeholder="Post" value={formData?.post} inputChange={handlefromChange} name="post" />
        <LableI_Input placeholder="City" value={formData?.city} inputChange={handlefromChange} name="city" />
        <LableI_Input placeholder="Description" value={formData?.desc} inputChange={handlefromChange} name="desc" type="textarea" />
      </div>
      <Duration />
      <div className="controls">
        <div className="conLeft">
          <i style={{}}>
            <MdPublic />
          </i>
          <h5>Public</h5>
        </div>
        <div className="conRight">
          <button onClick={() => setAddForm(false)} className="cancel">
            Cancel
          </button>
          <button onClick={null} className="save">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddForm;
