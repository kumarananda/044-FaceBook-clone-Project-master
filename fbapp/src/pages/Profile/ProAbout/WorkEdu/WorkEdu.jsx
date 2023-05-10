/** @format */

import React, { useEffect, useState } from "react";
import { MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AddCirclePlusWlink } from "../../../../components/UtilityComponents/AddCirclePlus/AddCirclePlus";
import DetailsItemShow from "./DetailsItemShow.jsx";
import { updateUserData } from "../../../../redux/auth/authAction";
import AddForm from "./AddForm.jsx";
import "./WorKEdu.css";

const WorKEdu = () => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  const [addForm, setAddForm] = useState(false);

  // handle add form state
  const handleAddForm = () => {
    setAddForm(true);
  };

  // const handleWorkEdit = e => {
  //   e.preventDefault();
  //   work.splice(editIndex, 1, formData);
  //   dispatch(updateUserData({ ...user, work }, handleEditForm));
  // };

  return (
    <>
      <h4 className="title">Work</h4>

      <AddCirclePlusWlink action={handleAddForm} title={"Add work"} />

      {/* Add Form */}
      {addForm && <AddForm setAddForm={setAddForm} />}

      {user?.work?.length > 0 &&
        user?.work?.map((item, index) => (
          <div key={index}>
            <DetailsItemShow deleindx={index} data={{ title: item?.company, duration: item?.duration, sub: item?.post }} />
          </div>
        ))}
    </>
  );
};

export default WorKEdu;

// subName duration title
