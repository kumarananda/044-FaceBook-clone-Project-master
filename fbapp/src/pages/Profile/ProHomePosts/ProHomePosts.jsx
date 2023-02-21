/** @format */

import React from "react";
import CardBox from "../../../components/UtilityComponents/CardBox/CardBox";
import ProOutletWrap from "../ProoutletWrap";
import Friends from "./Friends/Friends";
import PothoGalary from "./PothoGalary/PothoGalary";
import ProfileIntro from "./ProfileIntro/ProfileIntro";

const ProHomePosts = () => {
  return (
    <>
      <ProOutletWrap>
        <div className="profile_body_left">
          <div className="profile_body_left_box">
            <ProfileIntro />

            <PothoGalary />

            <Friends />
          </div>
        </div>
        <div className="profile_body_right">
          <div className="profile_body_right_box">
            <CardBox></CardBox>
          </div>
        </div>
      </ProOutletWrap>
    </>
  );
};

export default ProHomePosts;
