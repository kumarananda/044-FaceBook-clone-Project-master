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
import { useSelector } from "react-redux";
import ImgAddFeatuBox from "./ImgAddFeatuBox/ImgAddFeatuBox";

import sampalephoto from "../../../../../_assets/images/user.png";
import { BsPlusCircle } from "react-icons/bs";

const Featured = () => {
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

  // Featured Add modal
  const { user } = useSelector(state => state.auth);
  // console.log(user?.featured);
  const [featuredModal, setFeaturedModal] = useState(false);
  const [modalWidth, setModalWidth] = useState(700);
  const [modalTrans, setModalTrans] = useState(0);

  const [featurePhotos, setFeaturePhotos] = useState([]);
  const [selected, setSelected] = useState([]);
  const [upSelected, setUpSelected] = useState([]); // final file-Object array
  let collImgPrev = upSelected.length > 0 ? URL.createObjectURL(upSelected[0]) : "";

  console.log(collImgPrev);
  const [cancelModal, setCancelModal] = useState(false);
  const handleFeaturedModal = () => {
    setFeaturedModal(!featuredModal);
  };
  const handleFeaturedClose = () => {
    setFeaturedModal(false);
    setModalTrans(0);
    setFeaturePhotos([]);
    setSelected([]);
  };
  const handleFeaturedDiscard = () => {
    setCancelModal(false);
    setModalTrans(0);
    setFeaturePhotos([]);
    setSelected([]);
  };

  const handleSetUpSelected = () => {
    setModalTrans(modalTrans + 1);
    setUpSelected([...selected]);
    console.log(upSelected);
  };
  const handleTransHome = () => {
    setModalTrans(0);
  };
  const handleAddorEditTrans = () => {
    setModalTrans(modalTrans + 1);
  };
  const handleUpCancleModal = () => {
    setCancelModal(true);
  };
  const handleUpCancle = () => {
    setModalTrans(modalTrans - 1);
  };

  //
  const handleFeaturePhotos = e => {
    let array = Array.from(e.target.files);
    let newUpload = [];

    array.forEach((item, index) => {
      if (selected.find(data => data.name === item.name && data.type === item.type)) {
        return;
      } else {
        newUpload.push(item);
      }
    });

    setFeaturePhotos(prev => [...prev, ...newUpload]);
    setSelected(prev => [...prev, ...newUpload]);
  };
  const handleFeaturedChecked = e => {
    const updatedList = [...selected];
    let changeItem = featurePhotos.find(data => data.name === e.target.value);
    if (selected.includes(changeItem)) {
      updatedList.splice(selected.indexOf(changeItem), 1);
    } else {
      updatedList.push(changeItem);
    }
    setSelected([...updatedList]);
  };
  const handleUpSelected = e => {
    const updatedList = [...upSelected];
    let changeItem = featurePhotos.find(data => data.name === e.target.value);
    if (upSelected.includes(changeItem)) {
      updatedList.splice(upSelected.indexOf(changeItem), 1);
    } else {
      updatedList.push(changeItem);
    }
    setUpSelected([...updatedList]);
    console.log(upSelected);
  };

  // const handleCollectionUpload = () => {};

  return (
    <>
      <div className="featuredWraper">
        <button onClick={handleFeaturedModal} className="">
          {user?.featured ? "Edit featured" : "Add featured"}
        </button>

        {/* Featured add modal*/}
        <FullScSimpleModal MBoxWidth={modalWidth} modalOpen={featuredModal} setModalOpen={setFeaturedModal}>
          <div style={{ overflow: "hidden" }} className="overfllow">
            <div style={{ transition: "0.2s", transform: `translateX(${-modalTrans * 100}%)` }} className="modal-section-wraper">
              <div className="modal-section">
                {/* transform 0 */}
                <div style={{ minWidth: "100%" }} className="modal-section-item sec1">
                  {modalTrans === 0 && (
                    <>
                      <>
                        <div className="modal-header">
                          <div className="modal-header-content">
                            <span className="modalName">{user?.featured ? "Edit featured" : "Add featured"}</span>
                          </div>
                          <button onClick={handleFeaturedClose}>
                            <GoX />
                          </button>
                        </div>

                        {/* modal  body */}
                        <div className="modal-body">
                          {true && (
                            <>
                              <h3>if have featured item section updating</h3>
                            </>
                          )}
                          {!user?.featured && <ImgAddFeatuBox />}
                        </div>

                        {true && (
                          <div style={{ marginTop: "6px", border: "none" }} className="modal_footer">
                            <div className="modal-footer-content">
                              <button onClick={handleAddorEditTrans} className="addfeatuUpdateBtn">
                                Add featured
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    </>
                  )}
                </div>

                {/* transform 1 */}
                <div style={{ minWidth: "100%" }} className="modal-section-item sec2">
                  {modalTrans === 1 && (
                    <>
                      <div className="modal-header">
                        <div className="modal-header-content">
                          <span className="modalName">{user?.featured ? "Edit" : "Add"} Featured Collection(1)</span>
                        </div>
                        <button style={{ left: "10px" }} onClick={handleTransHome}>
                          <GoArrowLeft />
                        </button>
                      </div>

                      {/* modal  body */}
                      <div className="modal-body">
                        <label className="featuredPhotoUpload">
                          <span className="uploadBtn">Upload featurePhotos</span>
                          <input onChange={handleFeaturePhotos} multiple type="file" />
                        </label>
                        {/*  backgroundImage: `url(${item})`  */}
                        <div className="photoPreViewbox">
                          {featurePhotos.map((item, index) => {
                            const imgpreview = URL.createObjectURL(item);

                            return (
                              <div key={index} className="photoPreViewItem">
                                <div style={{}} className="photoPreView" alt="">
                                  <label style={{ width: "100%", height: "100%" }} htmlFor={`checkbox` + index} className="labelOverlay">
                                    <img src={imgpreview} alt="" />
                                  </label>
                                  <div className="round">
                                    <input
                                      value={item.name}
                                      checked={selected.includes(item)}
                                      onChange={handleFeaturedChecked}
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
                              <button onClick={handleSetUpSelected}>{"Next"}</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* transform 2 */}
                <div style={{ minWidth: "100%" }} className="modal-section-item sec3">
                  {modalTrans === 2 && (
                    <>
                      <div className="modal-header">
                        <div className="modal-header-content">
                          <span className="modalName">{user?.featured ? "Edit" : "Add"} Featured Collection(2)</span>
                        </div>
                        <button style={{ left: "10px" }} onClick={handleUpCancle}>
                          <GoArrowLeft />
                        </button>
                      </div>

                      {/* modal  body */}
                      <div className="modal-body">
                        <div className="photoPreViewbox">
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
                          {selected.map((item, index) => {
                            const imgPreViewUp = URL.createObjectURL(item);

                            return (
                              <div key={index} className="photoPreViewItem">
                                <div style={{}} className="photoPreView" alt="">
                                  <label style={{ width: "100%", height: "100%" }} htmlFor={`checkBox-${index}`} className="labelOverlay">
                                    <img src={imgPreViewUp} alt="" />
                                  </label>

                                  <div className="round">
                                    <input
                                      value={item.name}
                                      checked={upSelected.includes(item)}
                                      onChange={handleUpSelected}
                                      type="checkbox"
                                      id={`checkBox-` + index}
                                    />
                                    <label htmlFor={`checkBox-` + index}></label>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
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
                              <button onClick={null}>{"Save"}</button>
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
          <Carousel item_width={120} btnHide={true} show_items={3} arraylan={data.length}>
            {data.map((i, index) => (
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
                          backgroundImage: `url(${userImg})`,
                          display: "block",
                          backgroundRepeat: "no-repeat",
                          height: "90%",
                          width: "100%",
                          position: "relative",
                        }}
                        className="itemBox"
                      >
                        <div style={{ position: "absolute", bottom: "5px", left: "4px", color: "#fff" }}>+{"3"}</div>
                      </div>
                    </a>
                    <div style={{ textAlign: "center", padding: "5px 0", height: "15%" }}>Collection</div>
                  </div>
                </CorouselItem>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {popupShow && (
        <PopUpFullWidth setShow={setPopupShow}>
          <StorySlider data setShow={setPopupShow} />
        </PopUpFullWidth>
      )}
    </>
  );
};

export default Featured;
