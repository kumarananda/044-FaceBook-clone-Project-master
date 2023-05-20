/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddCirclePlusWlink } from "../../../../components/UtilityComponents/AddCirclePlus/AddCirclePlus";
import DetailsItemShow from "./DetailsItemShow";
import WorkAddForm from "./WorkAddForm";
import EduAddForm from "./EduAddForm.jsx";
import "./WorKEdu.css";

const WorKEdu = ({ isOverView }) => {
  // use selector
  const { user } = useSelector(state => state.auth);

  // work add from
  const [addForm, setAddForm] = useState(false);
  //Education  Add from
  const [addEdu, setAddEdu] = useState(false);

  // handle add form state
  const handleAddForm = () => {
    setAddForm(true);
  };
  const handleAddEduForm = () => {
    setAddEdu(true);
  };

  return (
    <>
      <h4 className="title">{addForm ? "Add Work" : "Work"}</h4>
      {!addForm && !isOverView && <AddCirclePlusWlink action={handleAddForm} title={"Add work"} />}
      {/* Add Form */}
      {addForm && <WorkAddForm setAddForm={setAddForm} />}

      <div style={{ marginBottom: "15px" }}>
        {user?.work?.length > 0 &&
          user?.work?.map((item, index) => (
            <div key={index}>
              <DetailsItemShow indexNo={index} data={item} title={item?.company} workAs={item.post} type={"work"} />
            </div>
          ))}
      </div>

      {/* Education */}
      <h4 className="title">{addEdu ? "Add Education" : "Education"}</h4>
      {!addEdu && !isOverView && <AddCirclePlusWlink action={handleAddEduForm} title={"Add Education"} />}
      {addEdu && <EduAddForm setAddForm={setAddEdu} />}

      <div style={{ marginBottom: "15px" }}>
        {user?.education?.length > 0 &&
          user?.education?.map((item, index) => (
            <div key={index}>
              {console.log(item.eduInstitute)}
              <DetailsItemShow indexNo={index} data={item} title={item.eduInstitute} studyIn={item.sub} type={"education"} />
            </div>
          ))}
      </div>
    </>
  );
};

/**
 * Former Defender at DFDS UK
February 3, 2019 - April 4, 2022 . London, United Kingdom
gfsdgsdgfds
 */

export default WorKEdu;

// subName duration title
