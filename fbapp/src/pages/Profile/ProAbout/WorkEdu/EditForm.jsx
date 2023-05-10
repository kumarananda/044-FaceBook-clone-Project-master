/** @format */

import React, { useState } from "react";
import { MdPublic } from "react-icons/md";

const EditForm = ({ setEditForm, editForm }) => {
  const [formData, setFormData] = useState({ type: "work", show: true, status: "public" });

  let input = { width: "100%", padding: "5px", fontSize: "16px" };
  const handlefromChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <div style={{ width: "100%" }} className="addEditForm">
          <input style={input} onChange={handlefromChange} value={formData?.company} type="text" name="company" placeholder="company" />
          <input style={input} onChange={handlefromChange} value={formData?.post} type="text" name="post" placeholder="post" />
          <input style={input} onChange={handlefromChange} value={formData?.duration} type="text" name="duration" placeholder="duration" />
        </div>
      </div>
      <div className="controls">
        <div className="conLeft">
          <i style={{}}>
            <MdPublic />
          </i>
          <h5>Public</h5>
        </div>
        <div className="conRight">
          <button onClick={() => setEditForm(false)} className="cancel">
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

export default EditForm;
