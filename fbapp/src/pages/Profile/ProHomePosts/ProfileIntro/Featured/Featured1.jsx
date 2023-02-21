/** @format */
import React, { useEffect, useState } from "react";
import "../../../../../components/UtilityComponents/FullScreenModal/FullScreenModal.css";
import "./Featured.css";
import Carousel, { CorouselItem } from "../../../../../components/UtilityComponents/Carousel/Carousel";
import PopUpFullWidth from "../../../../../components/UtilityComponents/PopUpFullWidth/PopUpFullWidth";
import userImg from "../../../../../_assets/images/user.png";
import FullScSimpleModal from "../../../../../components/UtilityComponents/FullScreenModal/FullScreenSimple";
import { GoX, GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import StorySlider from "./StorySlider/StorySlider";
import { useDispatch, useSelector } from "react-redux";
import ImgAddFeatuBox from "./ImgAddFeatuBox/ImgAddFeatuBox";
import { BsPlusCircle } from "react-icons/bs";
import { updateFeatured } from "../../../../../redux/auth/authAction";
import Cookies from "js-cookie";
import { timeSince } from "../../../../../utility/date";
import { FaPen } from "react-icons/fa";
import sampalephoto from "../../../../../_assets/images/user.png";

const Featured = () => {
  const dispatch = useDispatch();
  // Featured Add modal
  const { user } = useSelector(state => state.auth);
  const authToken = Cookies.get("authToken");

  // test array only
  // Featured popup
  let data = [1, 2, 3, 4, 5, 6, 7];
  const [popupShow, setPopupShow] = useState(false);
  const [userIndex, setUserIndex] = useState("");
  const handleFeaturedShow = (e, index) => {
    e.preventDefault();
    setPopupShow(true);
    setUserIndex(index);
  };

  // console.log(user?.featured);
  const [featuredModal, setFeaturedModal] = useState(false);
  const [modalWidth, setModalWidth] = useState(700);
  const [modalTrans, setModalTrans] = useState(0);
  const [cancelModal, setCancelModal] = useState(false);

  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [upPhotos, setUpPhotos] = useState([]);
  const [colleName, setColleName] = useState("Collection");

  // console.log(photos);
  // console.log(selectedPhotos);
  // console.log(upPhotos);

  let collImgPrev = upPhotos.filter(data => !data.disSele).length > 0 ? URL.createObjectURL(upPhotos.filter(data => !data.disSele)[0]) : "";

  // console.log(collImgPrev);

  const handleFeaturedModal = () => {
    setFeaturedModal(!featuredModal);
  };
  const handleFeaturedClose = () => {
    setFeaturedModal(false);
    setModalTrans(0);
    setPhotos([]);
    setSelectedPhotos([]);
    setUpPhotos([]);
  };
  const handleFeaturedDiscard = () => {
    setCancelModal(false);
    setModalTrans(0);
    setPhotos([]);
    setSelectedPhotos([]);
    setUpPhotos([]);
  };
  const handleUpCancleModal = () => {
    setCancelModal(true);
  };
  const handleTransNext = () => {
    setModalTrans(modalTrans + 1);
    setUpPhotos([...selectedPhotos]);
  };
  const handleTransHome = () => {
    setModalTrans(0);
  };
  const handleAddorEditTrans = () => {
    setModalTrans(modalTrans + 1);
  };
  const handleUpCancle = () => {
    setModalTrans(modalTrans - 1);
    setUpPhotos([]);
  };

  //
  const handlePhotoUpload = (e, re) => {
    let inputPhoto = Array.from(e.target.files);
    let newUpload = [];
    let findDulicate = [];
    inputPhoto.forEach((item, index) => {
      if (photos.find(data => data.size === item.size && data.type === item.type)) {
        findDulicate.push(item);
      } else {
        newUpload.push(item);
      }
    });
    console.log(findDulicate);

    setPhotos(prev => [...newUpload, ...prev]);
    setSelectedPhotos(prev => [...newUpload, ...prev]);
    if (re) {
      setUpPhotos(prev => [...newUpload, ...prev]);
    }
  };

  const handleSelected = (e, index) => {
    if (e.target.checked) {
      selectedPhotos.splice(index, 1, photos[index]);
      setSelectedPhotos([...selectedPhotos]);
    } else {
      selectedPhotos.splice(index, 1, { disSele: true });
      setSelectedPhotos([...selectedPhotos]);
    }
  };

  const handleUpPhotos = (e, index) => {
    if (e.target.checked) {
      upPhotos.splice(index, 1, selectedPhotos[index]);
      setUpPhotos([...upPhotos]);
    } else {
      upPhotos.splice(index, 1, { disSele: true });
      setUpPhotos([...upPhotos]);
    }
  };

  const handleFeaturedUpload = () => {
    const data = new FormData();
    upPhotos.forEach(item => {
      data.append("sliderImg", item);
    });
    data.append("name", colleName);
    data.append("token", authToken);
    data.append("updateOn", Date.now());

    dispatch(updateFeatured(data, user._id, authToken, handleFeaturedClose));
  };
  const handleCollEdit = (e, index) => {
    e.preventDefault();
    alert(index);
  };

  return (
    <>
      <div className="featuredWraper">
        {/* Featured add modal*/}
        <FullScSimpleModal MBoxWidth={modalWidth} modalOpen={featuredModal} setModalOpen={setFeaturedModal}>
          <div style={{ overflow: "hidden" }} className="overfllow">
            <div style={{ transition: "0.2s", transform: `translateX(${-modalTrans * 100}%)` }} className="modal-section-wraper">
              <div className="modal-section">
                {/* transform 0 */}
                <div style={{ minWidth: "100%" }} className="modal-section-item sec1">
                  {modalTrans === 0 && (
                    <>
                      <div className="modal-header">
                        <div className="modal-header-content">
                          <span className="modalName">{user?.featured?.length ? "Edit featured" : "Add featured"}</span>
                        </div>
                        <button onClick={handleFeaturedClose}>
                          <GoX />
                        </button>
                      </div>

                      {/* modal  body */}
                      <div className="modal-body">
                        {true && (
                          <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }} className="collWraper">
                            {/* will be map */}
                            {user?.featured && (
                              <>
                                {user?.featured.map((item, index) => (
                                  <>
                                    <div key={index} style={{ width: "50%" }} className="collItems">
                                      <a onClick={e => handleCollEdit(e, index)} href="/">
                                        <div style={{ width: "100%" }} className="itemWraper">
                                          <div
                                            style={{ display: "flex", padding: 0, margin: "8px", borderRadius: "5px" }}
                                            className="photoPreViewbox"
                                          >
                                            <div style={{ width: "auto" }} className="photoPreViewItem">
                                              <div style={{}} className="photoPreView" alt="">
                                                <label
                                                  style={{ width: "100%", height: "100%" }}
                                                  htmlFor={`checkbox${"index"}`}
                                                  className="labelOverlay"
                                                >
                                                  <img src={`/featured/${item.slider[0]}`} alt="" />
                                                </label>
                                              </div>
                                            </div>
                                            <div
                                              style={{
                                                width: "100%",
                                                maxWidth: "55%",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                              }}
                                              className="sliderInfo"
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  justifyContent: "center",
                                                  height: "100%",
                                                }}
                                                className="infoContent"
                                              >
                                                <div className="collName">{item.name}</div>
                                                <div className="itemCount">{item.slider.length + " Item"}</div>
                                                <div className="itemUpdate">Update on {timeSince(item.updateOn)}</div>
                                              </div>
                                              <div className="button">
                                                <FaPen />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </>
                                ))}
                              </>
                            )}
                          </div>
                        )}
                        {!user?.featured?.length && <ImgAddFeatuBox />}
                      </div>

                      <div style={{ marginTop: "6px", border: "none" }} className="modal_footer">
                        <div className="modal-footer-content">
                          <button onClick={handleAddorEditTrans} className="addfeatuUpdateBtn">
                            Add New
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* transform 1 */}
                <div style={{ minWidth: "100%" }} className="modal-section-item sec2">
                  {modalTrans == 1 && (
                    <>
                      <div className="modal-header">
                        <div className="modal-header-content">
                          <span className="modalName">{!user?.featured?.length ? "Add" : "Edit"} Featured Collection(1)</span>
                        </div>
                        <button style={{ left: "10px" }} onClick={handleTransHome}>
                          <GoArrowLeft />
                        </button>
                      </div>

                      {/* modal  body */}
                      <div style={{ maxHeight: "360px", overflow: "auto" }} className="bodyWrap">
                        <div className="modal-body">
                          <label className="featuredPhotoUpload">
                            <span className="uploadBtn">Upload Photos</span>
                            <input onChange={handlePhotoUpload} multiple type="file" />
                          </label>
                          {/*  backgroundImage: `url(${item})`  */}
                          <div className="photoPreViewbox">
                            {photos.map((item, index) => {
                              const imgpreview = URL.createObjectURL(item);
                              // console.log(!selectedPhotos[index].disSele);

                              return (
                                <div key={index} className="photoPreViewItem">
                                  <div style={{}} className="photoPreView" alt="">
                                    <label style={{ width: "100%", height: "100%" }} htmlFor={`checkbox${index}`} className="labelOverlay">
                                      <img src={imgpreview} alt="" />
                                    </label>
                                    <div className="round">
                                      <input
                                        checked={!selectedPhotos[index].disSele}
                                        onChange={e => handleSelected(e, index)}
                                        type="checkbox"
                                        id={`checkbox` + index}
                                      />
                                      <label htmlFor={`checkbox` + index}></label>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="secMsgtitle">
                            <h3> Stories</h3>
                            <h5>This includes any active stories and your story archive.</h5>
                          </div>
                        </div>
                      </div>

                      <div style={{ marginTop: "6px" }} className="modal_footer">
                        <div className="modal-footer-content">
                          <div className="modal-footer-left">
                            <Link style={{ display: "none" }} onClick={null} className="goPage"></Link>
                          </div>
                          <div className="modal-footer-right">
                            <div className="cancleBtn">
                              <button onClick={handleTransHome}>Cancel</button>
                            </div>
                            <div className="updateBtn">
                              <button disabled={selectedPhotos.filter(data => !data.disSele).length === 0} onClick={handleTransNext}>
                                {"Next"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* transform 2 */}
                <div style={{ minWidth: "100%" }} className="modal-section-item sec3">
                  {modalTrans == 2 && (
                    <>
                      <div className="modal-header">
                        <div className="modal-header-content">
                          <span className="modalName">{user?.featured?.length ? "Edit" : "Add"} Featured Collection(2)</span>
                        </div>
                        <button style={{ left: "10px" }} onClick={handleUpCancle}>
                          <GoArrowLeft />
                        </button>
                      </div>
                      {/* modal  body */}
                      <div style={{ maxHeight: "360px", overflow: "auto" }} className="bodyWrap">
                        <div className="modal-body">
                          <div style={{}} className="photoPreViewItem">
                            <div style={{ width: "120px", height: "200px", borderRadius: "6px", margin: "auto" }} className="photoPreView">
                              <img style={{ width: "100%", height: "auto" }} src={collImgPrev} alt="" />
                            </div>
                            <div style={{ margin: "10px 0", textAlign: "center" }} className="collectionNameSec">
                              <div className="collection">
                                <input
                                  onChange={e => setColleName(e.target.value)}
                                  value={colleName}
                                  className="collectionInput"
                                  type="text"
                                  id="colletion"
                                  placeholder="Collection"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-body">
                          <div onClick={handleUpCancle} style={{}} className="photoPreView" alt="">
                            <label style={{ width: "100%", height: "100%" }} className="labelOverlay">
                              <div
                                style={{
                                  // backgroundColor: "white",
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexWrap: "wrap",
                                }}
                                className="addMorePhoto"
                              ></div>
                            </label>
                          </div>
                          <div className="photoPreViewbox">
                            <div className="photoPreViewItem">
                              <div onClick={handleUpCancle} style={{}} className="photoPreView" alt="">
                                <label style={{ width: "100%", height: "100%" }} className="labelOverlay">
                                  <div
                                    style={{
                                      // backgroundColor: "white",
                                      width: "100%",
                                      height: "100%",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      flexWrap: "wrap",
                                    }}
                                    className="addMorePhoto"
                                  >
                                    <BsPlusCircle /> Add more
                                  </div>
                                </label>
                              </div>
                            </div>
                            {selectedPhotos.map((item, index) => {
                              if (!item.disSele) {
                                const imgPreViewUp = URL.createObjectURL(item);

                                return (
                                  <div key={index} className="photoPreViewItem">
                                    <div style={{}} className="photoPreView" alt="">
                                      <label style={{ width: "100%", height: "100%" }} htmlFor={`checkBox${index}`} className="labelOverlay">
                                        <img src={imgPreViewUp} alt="" />
                                      </label>
                                      <h5>{!upPhotos[index]?.disSele}</h5>
                                      <div className="round">
                                        <input
                                          checked={!upPhotos[index]?.disSele}
                                          onChange={e => handleUpPhotos(e, index)}
                                          type="checkbox"
                                          id={`checkBox` + index}
                                        />
                                        <label htmlFor={`checkBox` + index}></label>
                                      </div>
                                    </div>
                                  </div>
                                );
                              } else {
                                return;
                              }
                            })}
                          </div>
                        </div>
                      </div>

                      <div style={{ marginTop: "6px" }} className="modal_footer">
                        <div className="modal-footer-content">
                          <div className="modal-footer-left">
                            <Link style={{ display: "none" }} onClick={null} className="goPage"></Link>
                          </div>
                          <div className="modal-footer-right">
                            <div className="cancleBtn">
                              <button onClick={handleUpCancleModal}>Cancel</button>
                            </div>
                            <div className="updateBtn">
                              <button disabled={upPhotos.filter(data => !data.disSele).length === 0} onClick={handleFeaturedUpload}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FullScSimpleModal>
        {/* cancel confirmation modal */}
        <FullScSimpleModal setModalOpen={setCancelModal} outCickHide={true} modalOpen={cancelModal}>
          <div className="modal-header">
            <div className="modal-header-content">
              <span className="modalName">Discard Changes</span>
            </div>
            <button onClick={() => setCancelModal(false)}>
              <GoX />
            </button>
          </div>
          <h5 style={{ margin: "20px 5px" }}>Are you sure you want to discard your changes?</h5>
          <div style={{ marginTop: "6px", border: "none" }} className="modal_footer">
            <div className="modal-footer-content">
              <div className="modal-footer-left">
                <Link style={{ display: "none" }} onClick={null} className="goPage"></Link>
              </div>
              <div className="modal-footer-right">
                <div className="cancleBtn">
                  <button onClick={() => setCancelModal(false)}>Cancel</button>
                </div>
                <div className="updateBtn">
                  <button onClick={handleFeaturedDiscard}>Discard</button>
                </div>
              </div>
            </div>
          </div>
        </FullScSimpleModal>

        {/* FeaturedBox  */}
        <div style={{ margin: "10px 0" }} className="featuredBox">
          {user?.featured?.length ? (
            <>
              <Carousel CusRightBtnPosi={""} item_width={120} btnHide={true} show_items={3} arraylan={user?.featured?.length}>
                {user?.featured.map((i, index) => (
                  <div key={index} className="itemWraper">
                    <CorouselItem itemWidth={120} index={index}>
                      <div style={{ height: "100%" }}>
                        <a
                          onClick={e => handleFeaturedShow(e, index)}
                          href="/"
                          style={{ borderRadius: "10px", overflow: "hidden", height: "85%", width: "100%" }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${`/featured/${i.slider[0]}`})`, // src={`/featured/${item.slider[0]}`}
                              display: "block",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              height: "90%",
                              width: "100%",
                              position: "relative",
                            }}
                            className="itemBox"
                          >
                            <div style={{ position: "absolute", bottom: "5px", left: "4px", color: "#fff" }}>
                              +{user?.featured[index].slider?.length - 1}
                            </div>
                          </div>
                        </a>
                        <div style={{ textAlign: "center", padding: "5px 0", height: "15%" }}>{i?.name}</div>
                      </div>
                    </CorouselItem>
                  </div>
                ))}
              </Carousel>
            </>
          ) : (
            ""
          )}
        </div>
        <button onClick={handleFeaturedModal} className="">
          {user?.featured?.length ? "Edit featured" : "Add featured"}
        </button>
      </div>
      {popupShow && (
        <PopUpFullWidth setShow={setPopupShow}>
          <StorySlider apiPath={`/featured/`} data={user?.featured?.length ? user.featured[userIndex].slider : null} setShow={setPopupShow} />
        </PopUpFullWidth>
      )}
    </>
  );
};

export default Featured;

{
  /*  <label className="roundLabel">
                                {false && (
                                  <>
                                    <div
                                      style={{
                                        backgroundColor: "#fff",
                                      }}
                                      className="roundBox"
                                    >
                                      <box-icon size={{ width: "50px" }} color={"#54C7EC"} name="check"></box-icon>
                                    </div>
                                  </>
                                )}
                                {true && (
                                  <>
                                    <div
                                      style={{
                                        backgroundColor: "transparent",
                                      }}
                                      className="roundBox"
                                    >
                                      <box-icon
                                        size={{ width: "50px", backgroundColor: "transparent" }}
                                        color={"transparent"}
                                        name="check"
                                      ></box-icon>
                                    </div>
                                  </>
                                )}

                                <input checked onChange={e => handleSelected(e, index)} type="checkbox" id={`checkbox${index}`} />
                              </label> */
}
