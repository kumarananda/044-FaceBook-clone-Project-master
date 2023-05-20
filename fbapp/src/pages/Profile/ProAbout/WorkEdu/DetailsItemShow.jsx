/** @format */

import { useRef, useState } from "react";
import useMouseDown from "../../../../hooks/useMousdown";
import { MdPublic } from "react-icons/md";
import { BsStar, BsThreeDots, BsTrash } from "react-icons/bs";
import CardBox from "../../../../components/UtilityComponents/CardBox/CardBox";
import { HiOutlinePencil } from "react-icons/hi";
import "./WorKEdu.css";
import EditForm from "./WorkEditForm";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
import { MdLock } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import EduEditForm from "./EduEditForm";

const DetailsItemShow = ({ data, type, indexNo, title, workAs, studyIn }) => {
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
  const handleDelete = e => {
    user[type].splice(indexNo, 1);
    dispatch(updateUserData({ ...user, [type]: user[type] }));
  };

  return (
    <>
      {!editForm && (
        <>
          <div className="DetailsItemShow" style={{ marginBottom: "10px", marginTop: "10px" }}>
            <div className="itemLeft">
              <span className="iconBox">
                <img src={`/ItemShowIcon/${type}.png`} alt="" />
              </span>

              <span style={{ display: "block" }} className="textBox">
                <div className="" style={{ display: "flex" }}>
                  {workAs && (
                    <>
                      <h4>Work at {title}</h4> &nbsp;
                      {workAs && <h5> as {workAs}</h5>}
                    </>
                  )}
                  {studyIn && (
                    <>
                      <h4>{title}</h4> &nbsp;
                      {data.isGraduated && <h5> - Graduate</h5>}
                      {data && <h5>-{studyIn}</h5>}
                    </>
                  )}
                </div>
                <div className="durationDetiles">
                  {data?.monthFrom && <span className="month">{data?.monthFrom}&nbsp;</span>}
                  {data?.yearFrom && <span className="year">{data?.yearFrom}&nbsp;</span>}
                  {data?.dayFrom && <span className="day">{data?.dayFrom}&nbsp;</span>}
                  {!data?.isCouently && (
                    <>
                      to &nbsp;
                      {data?.monthTo && <span className="month">{data?.monthTo}&nbsp;</span>}
                      {data?.yearTo && <span className="year">{data?.yearTo}&nbsp;</span>}
                      {data?.dayTo && <span className="day">{data?.dayTo}&nbsp;</span>}
                    </>
                  )}
                  {data.isCouently && <span>Present</span>}
                </div>
                {data?.desc && <span>{data.desc}</span>}
              </span>
            </div>
            <div className="itemRight">
              <span className="viewIcon">
                <button className="roundBtn">
                  {data?.status === "public" && <MdPublic />}
                  {data?.status === "friend" && <MdPeople />}
                  {data?.status === "onlyMe" && <MdLock />}
                </button>
              </span>
              <span ref={popref} className="buttonBox">
                <button onClick={handlePopUp} className="roundBtn">
                  <BsThreeDots />
                </button>

                {popup && (
                  <>
                    <div className="popupBox" style={{ zIndex: 2 }}>
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
                            <button onClick={handleDelete}>
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

      {editForm && type === "work" && (
        <>
          <EditForm editIndex={indexNo} setEditForm={setEditForm} data={data} />
        </>
      )}
      {editForm && type === "education" && (
        <>
          <EduEditForm editIndex={indexNo} setEditForm={setEditForm} data={data} />
        </>
      )}
    </>
  );
};
export default DetailsItemShow;
