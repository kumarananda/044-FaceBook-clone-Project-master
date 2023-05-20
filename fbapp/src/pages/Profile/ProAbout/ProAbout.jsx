/** @format */

import React, { useEffect, useState } from "react";
import "./ProAbout.css";
import { Link, Outlet, useLocation, useOutlet } from "react-router-dom";
import ProOutletWrap from "../ProoutletWrap";
import CardBoxWH from "../../../components/UtilityComponents/CardBox/CardBoxWH";
import Relationship from "./Relationship/Relationship";
import Overview from "./Overview/Overview.jsx";
import LifeEvents from "./LifeEvents/LifeEvents";
import AboutYou from "./AboutYou/AboutYou";
import ContactInfo from "./ContactInfo/ContactInfo";
import WordEdu from "./WorkEdu/WorkEdu";
import { useSelector } from "react-redux";
import { navLinks } from "./aboutLinks";

const ProAbout = () => {
  // use Selector
  const { pathName } = useSelector(state => state.auth);
  const { pathname } = useLocation();

  const [active, setActive] = useState("");

  let location = pathName.split("/");
  location.splice(0, 2);
  const test = "/" + location.join("/");
  console.log(test);

  const handleActiv = e => {
    if (e.target.pathname === pathName) {
      e.target.classList.add("active");
    } else {
      e.target.classList.remove("active");
    }
    // console.log(e.target.pathname);
  };

  // const handleActive = () => {};
  // useEffect(() => {
  //   let data = pathName.split("/");
  //   data.splice(0, 2);
  //   console.log(data.join("/"));
  //   setActive(data.join("/"));
  //   console.log(active);
  // }, [pathname]);

  return (
    <>
      <ProOutletWrap>
        <CardBoxWH cPading={"0"}>
          <div style={{}} className="aboutSec">
            <div className="about aboutsecLeft">
              <Link className="title" to={"/profile/about"}>
                About
              </Link>
              {/*  */}
              {navLinks.map((data, i) => (
                <Link className={`${test === data.id ? "active" : ""}`} key={i} to={"/profile" + data.id}>
                  {data.title}
                </Link>
              ))}
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
