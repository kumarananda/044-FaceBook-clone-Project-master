/** @format */

import React from "react";
import { MdPublic } from "react-icons/md";
import "./EditAction.css";

const EditAction = ({ cancelAct = null, update = null, handlefromChange, formData, isUpdateable }) => {
  return (
    <div className="controls">
      <div className="conLeft">
        <select name="status" value={formData?.status} onChange={handlefromChange}>
          <option value="public">Public</option>
          <option value="friend">Friend</option>
          <option value="onlyMe">Only me</option>
        </select>
      </div>
      <div className="conRight">
        <button onClick={cancelAct} className="cancel">
          Cancel
        </button>
        <button disabled={!isUpdateable} onClick={update} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditAction;
