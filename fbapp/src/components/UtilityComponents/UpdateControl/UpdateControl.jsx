/** @format */

import React from "react";
import "./UpdateControl.css";
import icons from "../../../_assets/icons/post-menu.png";
import { MdPublic } from "react-icons/md";

const UpdateControl = ({ update, show }) => {
  return (
    <>
      <div className="controls">
        <div className="conLeft">
          <i style={{ backgroundImage: `url()` }}>
            <MdPublic />
          </i>
          <h5>Public</h5>
        </div>
        <div className="conRight">
          <button onClick={show ? show : null} className="cancel">
            Cancel
          </button>

          {true && (
            <button onClick={update} className="save">
              Save
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UpdateControl;
