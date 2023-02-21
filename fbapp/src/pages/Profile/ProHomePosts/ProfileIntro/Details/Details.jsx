/** @format */

import React from "react";
import "./Details.css";
import FullScreenModal from "../../../../../components/UtilityComponents/FullScreenModal/FullScreenModal";
import locationIcon from "../../../../../_assets/icons/intorIcons/-e1Al38ZrZL.png";
import eduIcon from "../../../../../_assets/icons/intorIcons/jV4o8nAgIEh.png";
import follwoIcon from "../../../../../_assets/icons/intorIcons/OyWm6cSjuMt.png";
import jobIcon from "../../../../../_assets/icons/intorIcons/Q9Qu4uLgzdm.png";
import loveIcon from "../../../../../_assets/icons/intorIcons/S0aTxIHuoYO.png";
import homeIcom from "../../../../../_assets/icons/intorIcons/VMZOiSIJIwn.png";
import { BsPlusCircle } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddCirclePlus, { SwitchCompo } from "../../../../../components/UtilityComponents/AddCirclePlus/AddCirclePlus";
import { useSelector } from "react-redux";

const Details = () => {
  // use selector
  const { user } = useSelector(state => state.auth);
  const [check, setCheck] = useState({ category: user?.category?.show });

  const handleCheck = e => {
    setCheck(prev => ({ ...prev, [e.target.name]: !check[e.target.name] }));
  };

  // handleUpdate
  const handleUpdate = () => {
    alert("jkkk");
  };

  return (
    <>
      <ul>
        <li>
          <div className="introItems">
            <img src={jobIcon} alt="" />
            <span>Former MSS at Student </span>
          </div>
        </li>
        <li>
          <div className="introItems">
            <img src={eduIcon} alt="" />
            <span>
              Studied at <span className="boldText">Govt Lohagara Ideal College</span>
            </span>
          </div>
        </li>
        <li>
          <div className="introItems">
            <img src={eduIcon} alt="" />
            <span>
              Studied at <span className="boldText">Tejgaon College</span>
            </span>
          </div>
        </li>
        <li>
          <div className="introItems">
            <img src={homeIcom} alt="" />
            <span>
              Lives in <span className="boldText">Dhaka, Bangladesh</span>
            </span>
          </div>
        </li>
        <li>
          <div className="introItems">
            <img src={loveIcon} alt="" />
            <span>Single</span>
          </div>
        </li>
        <li>
          <div className="introItems">
            <img src={follwoIcon} alt="" />
            <span>
              Followed by <span className="boldText">159 people</span>
            </span>
          </div>
        </li>
        <li>
          <div className="introItems">
            <img src={locationIcon} alt="" />
            <span>
              From <span className="boldText">Kalna, Khulna, Bangladesh</span>
            </span>
          </div>
        </li>
      </ul>

      <FullScreenModal
        boxWidth={700}
        goPage={{ to: "/profile", text: "Update your information", action: null }}
        // outCickHide={true}
        modalName={"Edit details"}
        btnElement={<button className="">Edit details</button>}
        action={handleUpdate}
      >
        <div className="editDetails">
          <div className="editDetailsTitle">
            <h4>Customize your intro</h4>
            <p style={{ display: "block", textAlign: "center" }}>Details you select will be public.</p>
          </div>
          <div className="editDetailsContentBox">
            {/* Category */}
            <div className="detItem">
              <h4 className="dTitles">Category</h4>
              <ul>
                <SwitchCompo
                  link="/profile/about/category"
                  // switchStatus={check.category}
                  action={handleCheck}
                  name={"category"}
                  title={user?.category?.cat}
                  data={check.category}
                />

                <AddCirclePlus link="/profile/about/category" title="Add category" />
              </ul>
            </div>
            {/* work */}
            <div className="detItem">
              <h4 className="dTitles">Work</h4>
              <ul>
                <li>
                  <div className="EG_leftBox">
                    <div className="switchInput">
                      <label>
                        <div className={`switch  ${check.work ? "on" : "off"}`}>
                          <div className="switchCircle "></div>
                        </div>
                        <input onClick={handleCheck} name="work" type="checkbox" />
                      </label>
                    </div>
                    <div className="itemValue">
                      <h4>Former MSS at Student</h4>
                      {!check.work && <p>Won't show in Intro but still Public</p>}
                    </div>
                  </div>
                  <div className="EG_RightBox">
                    <Link to={"/profile/about/work-and-edu"} className="editIcon">
                      <button>
                        <FaPen />
                      </button>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to={"/profile/about/work-and-edu"}>
                    <span style={{}}>
                      <BsPlusCircle />
                    </span>
                    <span style={{ marginLeft: "10px" }}>Add a work space</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Education */}
            <div className="detItem">
              <h4 className="dTitles">Education</h4>
              <ul>
                <li>
                  <div className="EG_leftBox">
                    <div className="switchInput">
                      <label>
                        <div className={`switch  ${check.edu ? "on" : "off"}`}>
                          <div className="switchCircle "></div>
                        </div>
                        <input onClick={handleCheck} name="edu" type="checkbox" />
                      </label>
                    </div>
                    <div className="itemValue">
                      <h4>Studied at Govt Lohagara Ideal College</h4>
                      {!check.edu && <p>Won't show in Intro but still Public</p>}
                    </div>
                  </div>
                  <div className="EG_RightBox">
                    <Link to={"/profile/about/work-and-edu"} className="editIcon">
                      <button>
                        <FaPen />
                      </button>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to={"/profile/about/work-and-edu"}>
                    <span style={{}}>
                      <BsPlusCircle />
                    </span>
                    <span style={{ marginLeft: "10px" }}>Add high school</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/profile/about/work-and-edu"}>
                    <span style={{}}>
                      <BsPlusCircle />
                    </span>
                    <span style={{ marginLeft: "10px" }}>Add college</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Current city */}
            <div className="detItem">
              <h4 className="dTitles">Current city</h4>
              <ul>
                <li>
                  <div className="EG_leftBox">
                    <div className="switchInput">
                      <label>
                        <div className={`switch  ${check.cCity ? "on" : "off"}`}>
                          <div className="switchCircle "></div>
                        </div>
                        <input onClick={handleCheck} name="cCity" type="checkbox" />
                      </label>
                    </div>
                    <div className="itemValue">
                      <h4>Lives in Dhaka, Bangladesh</h4>
                      {!check.cCity && <p>Won't show in Intro but still Public</p>}
                    </div>
                  </div>
                  <div className="EG_RightBox">
                    <div className="editIcon">
                      <button>
                        <FaPen />
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/">
                    <span style={{}}>
                      <BsPlusCircle />
                    </span>
                    <span style={{ marginLeft: "10px" }}>Add Current city</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Hometown */}
            <div className="detItem">
              <h4 className="dTitles">Hometown</h4>
              <ul>
                <li>
                  <div className="EG_leftBox">
                    <div className="switchInput">
                      <label>
                        <div className={`switch  ${check.hTown ? "on" : "off"}`}>
                          <div className="switchCircle "></div>
                        </div>
                        <input onClick={handleCheck} name="hTown" type="checkbox" />
                      </label>
                    </div>
                    <div className="itemValue">
                      <h4>Lives in Dhaka, Bangladesh</h4>
                      {!check.hTown && <p>Won't show in Intro but still Public</p>}
                    </div>
                  </div>
                  <div className="EG_RightBox">
                    <div className="editIcon">
                      <button>
                        <FaPen />
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/">
                    <span style={{}}>
                      <BsPlusCircle />
                    </span>
                    <span style={{ marginLeft: "10px" }}>Add Hometown</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Relationship */}
            <div className="detItem">
              <h4 className="dTitles">Relationship</h4>
              <ul>
                <li>
                  <div className="EG_leftBox">
                    <div className="switchInput">
                      <label>
                        <div className={`switch  ${check.relation ? "on" : "off"}`}>
                          <div className="switchCircle "></div>
                        </div>
                        <input onClick={handleCheck} name="relation" type="checkbox" />
                      </label>
                    </div>
                    <div className="itemValue">
                      <h4>Single</h4>
                      {!check.relation && <p>Won't show in Intro but still Public</p>}
                    </div>
                  </div>
                  <div className="EG_RightBox">
                    <div className="editIcon">
                      <button>
                        <FaPen />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Followers */}
            <div className="detItem">
              <h4 className="dTitles">Followers</h4>
              <ul>
                <li>
                  <div className="EG_leftBox">
                    <div className="switchInput">
                      <label>
                        <div className={`switch  ${check.followers ? "on" : "off"}`}>
                          <div className="switchCircle "></div>
                        </div>
                        <input onClick={handleCheck} name="followers" type="checkbox" />
                      </label>
                    </div>
                    <div className="itemValue">
                      <h4>Followed by 160 people</h4>
                      {!check.followers && <p>Won't show in Intro but still Public</p>}
                    </div>
                  </div>
                  <div className="EG_RightBox">
                    <div className="editIcon">
                      <button>
                        <FaPen />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div style={{ marginBottom: "10px" }} className="socialBox">
              <div className="socialBoxLeft">
                <div className="title">
                  <h4>Websites</h4>
                </div>
                <div className="msg">
                  <p>To feature links on your profile, set the audience to Public.</p>
                </div>
              </div>
              <div className="socialBoxRight">
                <button>
                  <span>
                    <BsPlusCircle />
                  </span>
                  <span>Public</span>
                </button>
              </div>
            </div>
            <div className="socialBox">
              <div className="socialBoxLeft">
                <div className="title">
                  <h4>Social Links</h4>
                </div>
                <div className="msg">
                  <p>To feature links on your profile, set the audience to Public.</p>
                </div>
              </div>
              <div className="socialBoxRight">
                <button>
                  <span>
                    <BsPlusCircle />
                  </span>
                  <span>Public</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export default Details;
