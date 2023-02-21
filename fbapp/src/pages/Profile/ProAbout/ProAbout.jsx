/** @format */

import React from "react";
import "./ProAbout.css";
import { Link, Outlet, useLocation, useOutlet } from "react-router-dom";
import ProOutletWrap from "../ProoutletWrap";
import CardBoxWH from "../../../components/UtilityComponents/CardBox/CardBoxWH";
import Relationship from "./Relationship/Relationship";
import Overview from "./Overview/Overview.jsx";
import LifeEvents from "./LifeEvents/LifeEvents";
import AboutYou from "./AboutYou/AboutYou";
import ContactInfo from "./ContactInfo/ContactInfo";
import WordEdu from "./WordEdu/WorkEdu";
import { useSelector } from "react-redux";
import Category from "./Category/Category";

const ProAbout = () => {
  // const out = use();
  // console.log(out);

  // use Selector
  const { pathName } = useSelector(state => state.auth);

  const handleActiv = e => {
    if (e.target.pathname === pathName) {
      e.target.classList.add("active");
    } else {
      e.target.classList.remove("active");
    }
    // console.log(e.target.pathname);
  };

  return (
    <>
      <ProOutletWrap>
        <CardBoxWH cPading={"0"}>
          <div style={{}} className="aboutSec">
            <div className="about aboutsecLeft">
              <Link className={"title"} to={"/profile/about"}>
                About
              </Link>
              <Link className={`${"active"}`} to={"/profile/about"}>
                Overview
              </Link>
              <Link className={""} to={"/profile/about/category"}>
                Category
              </Link>

              <Link onClick={handleActiv} to={"/profile/about/work-and-edu"}>
                Work and education
              </Link>
              <Link to={"/profile/about/contact-info"}>Contact and basic info</Link>
              <Link to={"/profile/about/places-lived"}>Places lived</Link>
              <Link to={"/profile/about/relationship"}>Family and ralationships</Link>
              <Link to={"/profile/about/about-you"}>Details about you</Link>
              <Link to={"/profile/about/life-event"}>Life events</Link>
            </div>

            <div className="about aboutsecRight">
              <div style={{ width: "100%", padding: "12px" }}>
                <Outlet>
                  <Overview />
                  <WordEdu />
                  <LifeEvents />
                  <AboutYou />
                  <ContactInfo />
                  <Relationship />
                  <Category />
                </Outlet>
              </div>
            </div>
          </div>
        </CardBoxWH>
      </ProOutletWrap>
    </>
  );
};

export default ProAbout;
