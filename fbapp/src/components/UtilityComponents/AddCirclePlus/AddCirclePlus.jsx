/** @format */

import React from "react";
import { BsPlusCircle } from "react-icons/bs";

import { FaPen } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./AddCirclePlus.css";

export const AddCirclePlus = ({ title, link, action }) => {
  return (
    <>
      <li className="AddCirclePlus">
        <Link onClick={action} to={link}>
          <span style={{}}>
            <BsPlusCircle />
          </span>
          <span style={{ marginLeft: "10px" }}>{title}</span>
        </Link>
      </li>
    </>
  );
};
export const AddCirclePlusWlink = ({ title, link, action }) => {
  return (
    <>
      <li className="AddCirclePlus">
        <div onClick={action}>
          <span style={{}}>
            <BsPlusCircle />
          </span>
          <span style={{ marginLeft: "10px" }}>{title}</span>
        </div>
      </li>
    </>
  );
};

export const SwitchCompo = ({ data, title, action, msg, name, link, switchStatus }) => {
  // const [on, setOn] = useState(switchStatus);
  return (
    <>
      <li>
        <div className="EG_leftBox">
          <div className="switchInput">
            <label>
              <div className={`switch  ${data ? "on" : "off"}`}>
                <div className="switchCircle "></div>
              </div>
              <input onClick={action} name={name} type="checkbox" />
            </label>
          </div>
          <div className="itemValue">
            <h4>{title}</h4>
            {!data && <p>{msg ? msg : "Won't show in Intro but still Public"}</p>}
          </div>
        </div>
        <div className="EG_RightBox">
          <Link to={link ? link : "/"} className="editIcon">
            <button>
              <FaPen />
            </button>
          </Link>
        </div>
      </li>
    </>
  );
};

export default AddCirclePlus;
