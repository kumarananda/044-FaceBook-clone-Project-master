/** @format */

import { useRef, useState } from "react";
import useMouseDown from "../../../../hooks/useMousdown";
import { MdPublic } from "react-icons/md";
import { BsStar, BsThreeDots, BsTrash } from "react-icons/bs";
import CardBox from "../../../../components/UtilityComponents/CardBox/CardBox";
import { HiOutlinePencil } from "react-icons/hi";
import "./WorKEdu.css";
import EditForm from "./EditForm";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
// C:\aks\reaF\currentfile\044 FaceBook Project\fbapp\src\pages\Profile\ProAbout\Category\Category.css

const DetailsItemShow = ({ data, type, deleindx }) => {
  const popref = useRef(null);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const [editForm, setEditForm] = useState(false);
  // use selector
  const { user } = useSelector(state => state.auth);
  useMouseDown(popref, popup, setPopup);

  const handlePopUp = () => {
    setPopup(!popup);
  };

  // delete item
  const handleWorkDelete = e => {
    user.work.splice(deleindx, 1);
    dispatch(updateUserData({ ...user, work: user.work }));
  };

  // will update

  return (
    <>
      {!editForm && (
        <>
          <div className="DetailsItemShow">
            <div className="itemLeft">
              <span className="iconBox">
                <img src={`/ItemShowIcon/${type ? type : "study"}.png`} alt="" />
              </span>

              <span style={{ display: "block" }} className="textBox">
                <h4>{data?.title}</h4>
                <h5 style={{ display: "block" }}>{data?.duration}</h5>
                <h6>{data?.sub} </h6>
              </span>
            </div>
            <div className="itemRight">
              <span className="viewIcon">
                <button className="roundBtn">
                  <MdPublic />
                </button>
              </span>
              <span ref={popref} className="buttonBox">
                <button onClick={handlePopUp} className="roundBtn">
                  <BsThreeDots />
                </button>

                {popup && (
                  <>
                    <div className="popupBox">
                      <CardBox pad={"8px"} widt={"290px"}>
                        <>
                          <button>
                            <BsStar />
                            <span>See life Event</span>
                          </button>
                        </>

                        <>
                          <button onClick={() => setEditForm(true)}>
                            <HiOutlinePencil />
                            <span>Edit Work</span>
                          </button>
                        </>

                        <>
                          <div>
                            <button onClick={handleWorkDelete}>
                              <BsTrash />
                              <span>Delete </span>
                            </button>
                          </div>
                        </>
                      </CardBox>
                    </div>
                  </>
                )}
              </span>
            </div>
          </div>
        </>
      )}

      {editForm && (
        <>
          <EditForm editForm={editForm} setEditForm={setEditForm} />
        </>
      )}
    </>
  );
};
export default DetailsItemShow;
