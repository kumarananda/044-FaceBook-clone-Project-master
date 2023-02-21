/** @format */

import React from "react";
import Hobbies from "./Hobbies/Hobbies";
import CardBox from "../../../../components/UtilityComponents/CardBox/CardBox";
import Bio from "./Bio/Bio";
import Details from "./Details/Details";
import Featured from "./Featured/Featured1.jsx";

const ProfileIntro = () => {
  return (
    <>
      <CardBox>
        <div className="profile_intro">
          <h3>Intro</h3>
          <Bio />
          <Details />

          <Hobbies data={"data"} />
          {/* </div> */}

          <Featured />
        </div>
      </CardBox>
      {/* popup */}

      {/*  */}
    </>
  );
};

export default ProfileIntro;
