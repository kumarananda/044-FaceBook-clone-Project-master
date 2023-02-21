/** @format */

import React, { useState } from "react";
import { BsPlusCircle, BsStar, BsThreeDots, BsTrash } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { Link } from "react-router-dom";
import CardBox from "../CardBox/CardBox";
import "./AddCirclePlus.css";
import useMouseDown from "../../../hooks/useMousdown";
import { useRef } from "react";

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

export const DetailsItemShow = ({ data, action, deleindx, del, type, indx = null }) => {
  const popref = useRef(null);
  const [popup, setPopup] = useState(false);
  useMouseDown(popref, popup, setPopup);

  const handlePopUp = () => {
    deleindx(indx);
    setPopup(!popup);
  };

  // will update
  // console.log(index);

  return (
    <>
      <div className="DetailsItemShow">
        <div className="itemLeft">
          <span className="iconBox">
            <img src={`/ItemShowIcon/${type ? type : "study"}.png`} alt="" />
          </span>

          <span style={{ display: "block" }} className="textBox">
            <h4>{data?.title}</h4>
            <h5 style={{ display: "block" }}>{data?.duration}</h5>
            <h6>{data?.sub} </h6>
          </span>
        </div>
        <div className="itemRight">
          <span className="viewIcon">
            <button className="roundBtn">
              <MdPublic />
            </button>
          </span>
          <span ref={popref} className="buttonBox">
            <button onClick={handlePopUp} className="roundBtn">
              <BsThreeDots />
            </button>

            {/* must action will be frist and than popup */}
            {/* beacuse popup is a ref type action & is depended with actions */}
            {action && popup && (
              <>
                <div className="popupBox">
                  <CardBox pad={"8px"} widt={"290px"}>
                    {action?.see && (
                      <>
                        <button>
                          <BsStar />
                          <span>See life Event</span>
                        </button>
                      </>
                    )}
                    {action?.edit && (
                      <>
                        <button onClick={() => action?.edit(indx)}>
                          <HiOutlinePencil />
                          <span>Edit {action?.editName}</span>
                        </button>
                      </>
                    )}

                    <>
                      <div>
                        <button onClick={del}>
                          <BsTrash />
                          <span>Delete </span>
                        </button>
                      </div>
                    </>
                  </CardBox>
                </div>
              </>
            )}
          </span>
          {/* form */}
          {}
        </div>
      </div>
    </>
  );
};

export default AddCirclePlus;
