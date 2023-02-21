/** @format */

import React from "react";
import "./Hobbies.css";
// import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import travalIcon from "../../../../../_assets/icons/intorIcons/traval.png";

const Hobbies = ({ data, icon, closeOff, borderOff }) => {
  let ico = "img";
  if (icon === "font") {
    ico = "font";
  }

  return (
    <>
      <button className="">Add hobbies</button>
      <button className="">Edit Hobbies</button>
      <div style={{ margin: "10px 0" }} className="hobbiesBox">
        <div className="hob">
          <span className="hobBox">
            <div role={"button"} onClick={() => alert()} className="hobItem" style={{ border: `${borderOff ? "none" : ""}` }}>
              {ico === "img" && <img src={travalIcon} alt="" />}
              {ico === "font" && <div className="text">🌏</div>}
              <div className="text">{data.hobbies ? data.hobbies : "Hobbie"}</div>
              {!closeOff && (
                <div className="close">
                  <AiOutlineClose />
                </div>
              )}
            </div>
          </span>
          <span className="hobBox">
            <div role={"button"} onClick={() => alert()} className="hobItem" style={{ border: `${borderOff ? "none" : ""}` }}>
              {ico === "img" && <img src={travalIcon} alt="" />}
              {ico === "font" && <div className="text">🌏</div>}
              <div className="text">{data.hobbies ? data.hobbies : "Hobbie"}</div>
              {!closeOff && (
                <div className="close">
                  <AiOutlineClose />
                </div>
              )}
            </div>
          </span>
          <span className="hobBox">
            <div role={"button"} onClick={() => alert()} className="hobItem" style={{ border: `${borderOff ? "none" : ""}` }}>
              {ico === "img" && <img src={travalIcon} alt="" />}
              {ico === "font" && <div className="text">🌏</div>}
              <div className="text">{data.hobbies ? data.hobbies : "Hobbie"}</div>
              {!closeOff && (
                <div className="close">
                  <AiOutlineClose />
                </div>
              )}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
