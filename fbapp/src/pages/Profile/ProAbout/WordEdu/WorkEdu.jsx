/** @format */

import React, { useEffect, useState } from "react";
import { MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AddCirclePlusWlink, DetailsItemShow } from "../../../../components/UtilityComponents/AddCirclePlus/AddCirclePlus";
import UpdateControl from "../../../../components/UtilityComponents/UpdateControl/UpdateControl";
import { updateUserData } from "../../../../redux/auth/authAction";

import "./WorKEdu.css";

const WorKEdu = () => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  // state
  const [work, setWork] = useState(user?.work ? user.work : []);
  const [formData, setFormData] = useState({ type: "work", show: true, status: "public" });

  const [editIndex, setEditIndex] = useState("");
  const [editForm, setEditForm] = useState(false);

  const [addForm, setAddForm] = useState(false);

  const [deleteIndex, setDeleteIndex] = useState("");

  console.log(deleteIndex);

  const handlefromChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handle form show
  const handleEditForm = index => {
    setAddForm(false);
    setEditForm(!editForm);
    setFormData(work[index]);
    setEditIndex(index);
  };
  const handleAddForm = () => {
    setAddForm(!addForm);
    setEditForm(false);
    setFormData({ type: "work", show: true, status: "public" });
  };

  // data update
  const handleWorkAdd = e => {
    e.preventDefault();
    dispatch(updateUserData({ ...user, work: [...work, formData] }, setAddForm));
  };
  const handleWorkEdit = e => {
    e.preventDefault();
    work.splice(editIndex, 1, formData);
    dispatch(updateUserData({ ...user, work }, handleEditForm));
  };
  const handleWorkDelete = e => {
    work.splice(deleteIndex, 1);

    dispatch(updateUserData({ ...user, work }));
  };

  useEffect(() => {
    setWork(user?.work);
  }, [user]);

  let addform = { width: "100%" };
  let input = { width: "100%", padding: "5px", fontSize: "16px" };

  return (
    <>
      <h4 className="title">Work</h4>
      {!editForm &&
        !addForm &&
        user?.work?.length !== 0 &&
        user?.work?.map((item, index) => (
          <>
            <div key={index}>
              <DetailsItemShow
                action={{ edit: handleEditForm, editName: "Work" }}
                deleindx={setDeleteIndex}
                del={handleWorkDelete}
                indx={index}
                data={{ title: item?.company, duration: item?.duration, sub: item?.post }}
              />
            </div>
          </>
        ))}
      {(addForm || editForm) && (
        <>
          <div style={{ addform }} className="addEditForm">
            <input style={input} onChange={handlefromChange} value={formData?.company} type="text" name="company" placeholder="company" />
            <input style={input} onChange={handlefromChange} value={formData?.post} type="text" name="post" placeholder="post" />
            <input style={input} onChange={handlefromChange} value={formData?.duration} type="text" name="duration" placeholder="duration" />
          </div>
        </>
      )}
      {addForm && (
        <>
          <div className="controls">
            <div className="conLeft">
              <i style={{ backgroundImage: `url()` }}>
                <MdPublic />
              </i>
              <h5>Public</h5>
            </div>
            <div className="conRight">
              <button onClick={handleAddForm} className="cancel">
                Cancel
              </button>

              <button onClick={handleWorkAdd} className="save">
                Save
              </button>
            </div>
          </div>
        </>
      )}
      {editForm && (
        <>
          <div className="controls">
            <div className="conLeft">
              <i style={{ backgroundImage: `url()` }}>
                <MdPublic />
              </i>
              <h5>Public</h5>
            </div>
            <div className="conRight">
              <button onClick={handleEditForm} className="cancel">
                Cancel
              </button>
              <button onClick={handleWorkEdit} className="save">
                Save
              </button>
            </div>
          </div>
        </>
      )}
      <>{/* <UpdateControl show={formShow} update={handleWorkAdd} /> */}</>

      {!addForm && !editForm && <AddCirclePlusWlink action={handleAddForm} title={"Add work"} />}
    </>
  );
};

export default WorKEdu;

// subName duration title
