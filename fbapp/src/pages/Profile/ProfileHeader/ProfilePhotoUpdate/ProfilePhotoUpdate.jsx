/** @format */

import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import FullScSimpleModal from "../../../../components/UtilityComponents/FullScreenModal/FullScreenSimple";
import { GoX, GoPlus } from "react-icons/go";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiCrop } from "react-icons/bi";
import { HiClock } from "react-icons/hi";
import "./ProfilePhotoUpdate.css";
import getCroppedImg from "../../../../utility/cropImage";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePhoto } from "../../../../redux/auth/authAction";
import Cookies from "js-cookie";

const ProfilePhotoUpdate = ({ modalOpen, setModalOpen }) => {
  const dispatch = useDispatch();
  // use seclector
  const { user } = useSelector(state => state.auth);
  const authToken = Cookies.get("authToken");

  // text discription aria
  const [tAaria, setTAaria] = useState(false);
  const handletextaria = e => {
    if (e.type === "focus") {
      setTAaria(true);
    } else if (e.type === "blur") {
      setTAaria(false);
    }
  };

  const [initialPhoto, setInitialPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croped, setCroped] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    // console.log(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      if (croped) {
        //nothing
      } else {
        const croppedImage = await getCroppedImg(photo, croppedAreaPixels, rotation); // skip retation
        setCroppedImage(croppedImage);
        setPhoto(croppedImage);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        setCroped(true);
      }
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  // zoom range
  const handleRangeValue = e => {
    setZoom(e.target.value);
    console.log(e.target.value);
    console.log(zoom);
    setCroped(false);
  };

  // zoom button
  const handleManualZoom = type => {
    let step = 0.01;
    if (type === "minus") {
      if (Number(zoom) - Number(step) <= 1) {
        setZoom(1);
      } else {
        setZoom(parseFloat(Number(zoom) - Number(step)).toFixed(2));
      }
    }
    if (type === "plus") {
      if (Number(zoom) + Number(step) > 2) {
        setZoom(2);
      } else {
        setZoom(parseFloat(Number(zoom) + Number(step)).toFixed(2));
      }
    }
    setCroped(false);
  };

  // rotation range
  const handleRotation = e => {
    setRotation(e.target.value);
  };
  // ratation button
  const handleManualRotation = type => {
    let step = 5;
    if (type === "minus") {
      if (Number(rotation) - Number(step) <= 0) {
        setRotation(0);
      } else {
        setRotation(parseFloat(Number(rotation) - Number(step)).toFixed(2));
      }
    }
    if (type === "plus") {
      if (Number(rotation) + Number(step) > 360) {
        setRotation(360);
      } else {
        setRotation(parseFloat(Number(rotation) + Number(step)).toFixed(2));
      }
    }
  };

  const handleCropImgeSelect = e => {
    console.log(e.target.files[0]);
    const img = URL.createObjectURL(e.target.files[0]);
    setPhoto(img);
    setInitialPhoto(img);
  };

  // handle discardData
  const discardData = () => {
    setCroppedImage(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setPhoto(null);
    setModalOpen(false);
    setRotation(0);
    setCroped(false);
  };

  //
  const handleProfilePhotoUpload = async () => {
    try {
      const image = await fetch(croppedImage ? croppedImage : initialPhoto).then(res => res.blob());

      var fileImage = new File([image], "profile_photo.png", { type: "image/png" });

      const formData = new FormData();

      formData.append("token", authToken);
      formData.append("profile", fileImage);

      dispatch(updateProfilePhoto(formData, user._id, authToken, discardData)); // set state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FullScSimpleModal btnElement={<div />} outCickHide={false} MBoxWidth={700} setModalOpen={setModalOpen} modalOpen={modalOpen}>
        {/* header */}
        <div className="modal-header">
          <div className="modal-header-content">
            <span className="modalName">Profile Photo Update</span>
          </div>
          <button style={{}} onClick={discardData}>
            <GoX />
          </button>
        </div>
        {/* body */}
        <div className="ProfilePhotoUpdate-body" style={{ minHeight: "300px" }}>
          {!photo && (
            <>
              <div className="upload-btn">
                <label htmlFor="profilePhoto">
                  <GoPlus /> Upload
                  <input onChange={handleCropImgeSelect} style={{ display: "none" }} id="profilePhoto" type="file" />
                </label>
              </div>
            </>
          )}

          {photo && (
            <>
              <div>
                <div style={{ marginBottom: "10px" }} className="wraper">
                  <label className={`description ${tAaria && "active"}`}>
                    <span>Description</span>
                    <textarea name="description" id="" style={{ width: "100%", resize: "none" }} onBlur={handletextaria} onFocus={handletextaria} />
                  </label>
                </div>
              </div>
              <div
                style={{ position: "relative", height: "300px", widows: "100%", marginTop: "50px", marginBottom: "20px" }}
                className="image-crop-areia"
              >
                <Cropper
                  image={photo}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 4}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onRotationChange={setRotation}
                  rotation={rotation}
                  onZoomChange={setZoom}
                  cropShape="round"
                  showGrid={false}
                  cropSize={{ height: 250, width: 250 }}
                  style={{
                    containerStyle: { height: "100%", width: "100%" },
                    cropAreaStyle: { color: "rgba(255, 255, 255, 0.7) " },
                    mediaStyle: {},
                  }}
                />
              </div>
              {/*  rotation */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>Rotation</span>
              </div>
              <div className="imageRangeControl rotation">
                <div className="icons">
                  <i onClick={() => handleManualRotation("minus")}>
                    <AiOutlineMinus />
                  </i>
                </div>
                <div className="rangDiv">
                  <input value={rotation} className="input" id="" onChange={handleRotation} step={5} min={0} max={360} type="range" />
                </div>
                <div className="icons">
                  <i onClick={() => handleManualRotation("plus")}>
                    <AiOutlinePlus />
                  </i>
                </div>
              </div>

              {/* range for zoom  */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>Zoom</span>
              </div>
              <div className="imageRangeControl">
                <div className="icons">
                  <i onClick={() => handleManualZoom("minus")}>
                    <AiOutlineMinus />
                  </i>
                </div>
                <div className="rangDiv">
                  <input value={zoom} className="input" id="range" onChange={handleRangeValue} step={0.01} min={1} max={2} type="range" />
                </div>
                <div className="icons">
                  <i onClick={() => handleManualZoom("plus")}>
                    <AiOutlinePlus />
                  </i>
                </div>
              </div>
              <div className="controlBtns">
                <button onClick={showCroppedImage} className="cropBtn">
                  <BiCrop /> Crop Photo{" "}
                </button>
                <button disabled className="TempBtn">
                  <HiClock /> Make Temporary
                </button>
              </div>
            </>
          )}
        </div>
        {/* Footer */}

        <>
          <div style={{ marginTop: "6px" }} className="modal_footer">
            <div className="modal-footer-content">
              <div className="modal-footer-left"></div>
              <div className="modal-footer-right">
                <div className="cancleBtn">
                  <button onClick={discardData}>Cancel</button>
                </div>
                {photo && (
                  <div onClick={handleProfilePhotoUpload} className="updateBtn">
                    <button>Save</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      </FullScSimpleModal>
    </>
  );
};

export default ProfilePhotoUpdate;

// children, modalOpen = false, setModalOpen, MBoxWidth, outCickHide, ZIndex
