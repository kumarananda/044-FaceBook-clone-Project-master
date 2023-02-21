/** @format */

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Bio.css";
import icons from "../../../../../_assets/icons/post-menu.png";
import { useEffect } from "react";
import { updateUserData } from "../../../../../redux/auth/authAction";

const Bio = () => {
  //use dispatch
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  // console.log(user._id);

  // state
  const [bio, setBio] = useState(user?.bio);
  const [editshow, setEditshow] = useState(false);

  // const [remain, setRemain] = useState(101 - bio?.length);

  // handle
  const handleEditshow = () => {
    setEditshow(!editshow);
  };
  const handleBioChange = e => {
    setBio(e.target.value);
  };

  // data update
  const handleBioUpdate = async e => {
    e.preventDefault();
    dispatch(updateUserData({ ...user, bio: bio }, setEditshow));
  };

  useEffect(() => {
    setBio(user.bio);
  }, [user]);

  let remain = 101 - bio?.length;

  return (
    <>
      <div className="bioSection">
        {!editshow && (
          <>
            {user.bio && (
              <p style={{}} className="">
                -{user.bio}-
              </p>
            )}
            <button onClick={handleEditshow} className="">
              {user.bio ? "Edit bio" : "Add Bio"}
            </button>
          </>
        )}

        {editshow && (
          <>
            <div className="textEdit">
              <textarea
                value={bio}
                onChange={handleBioChange}
                name="bio"
                // onResize={false}
                onResize={{ autosize: false }}
                placeholder={bio ? bio : "Describe who you are"}
                style={{}}
                rows="3"
              ></textarea>
              <div className="remaning">
                <p>{remain} characters remaining </p>
              </div>
              <div className="controls">
                <div className="conLeft">
                  <i style={{ backgroundImage: `url(${icons})` }}></i>
                  <h5>Public</h5>
                </div>
                <div className="conRight">
                  <button onClick={handleEditshow} className="cancel">
                    Cancel
                  </button>
                  {/* <button  onClick={handleBioUpdate} className="save">
                    Save
                  </button> */}
                  <button disabled={remain < 0 || bio === user.bio ? true : false} onClick={handleBioUpdate} className="save">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Bio;
