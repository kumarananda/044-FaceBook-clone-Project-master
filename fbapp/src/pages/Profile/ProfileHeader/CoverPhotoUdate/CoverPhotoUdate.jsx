/** @format */

import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import getCroppedImg from "../../../../utility/cropImage";
import Cookies from "js-cookie";
import "react-easy-crop/react-easy-crop.css";

const CoverPhotoUdate = () => {
  const dispatch = useDispatch();
  // use seclector
  const { user } = useSelector(state => state.auth);
  const authToken = Cookies.get("authToken");

  const [initialPhoto, setInitialPhoto] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const [imgData, setImgData] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    // console.log(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(photo, croppedAreaPixels, rotation); // skip retation
      console.log("done", { croppedImage });
      setCroppedImage(croppedImage);
      setPhoto(croppedImage);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const handleRangeValue = e => {
    setZoom(1 + e.target.value / 100);
    // console.log(e.target.value);
  };

  const handleImgeSelect = e => {
    console.log(e.target.files[0]);
    const img = URL.createObjectURL(e.target.files[0]);
    setPhoto(img);
    setInitialPhoto(img);

    const imgtest = new Image();
    imgtest.onload = function () {
      let obj = { width: this.width, height: this.height };
      setImgData(obj);
      // console.log(this.width + "x" + this.height);
    };
    imgtest.src = img;
  };

  // handle discardData
  const discardData = () => {
    setCroppedImage(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setPhoto(null);
  };

  //
  const handleProfilePhotoUpload = async () => {
    try {
      const image = await fetch(croppedImage ? croppedImage : initialPhoto).then(res => res.blob());

      var fileImage = new File([image], "profile_photo.png", { type: "image/png" });

      const formData = new FormData();

      formData.append("token", authToken);
      formData.append("profile", fileImage);

      //   dispatch(updateProfilePhoto(formData, user._id, authToken, discardData)); // set state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!photo && <div className="fb-header-shad"></div>}
      <div
        className="fb-cover-photo"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url("https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg")`,
        }}
      >
        {photo && (
          <div>
            <Cropper
              image={photo}
              crop={crop}
              zoom={zoom}
              aspect={4 / 2}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onRotationChange={setRotation}
              onZoomChange={setZoom}
              // objectFit="contain"
              objectFit="vertical-cover"
              showGrid={false}
              cropSize={{ height: "300px", width: "100%" }}
              //   cropSize={{ height: "450px", width: "1140px" }}
              style={{
                containerStyle: {},
                cropAreaStyle: { color: "rgba(255, 255, 255, 0.7) " },
                mediaStyle: { width: "100%", height: "100%" },
              }}
            />
          </div>
        )}
      </div>
      {!photo && (
        <div className="coverUpdateBtn" style={{ zIndex: 2 }}>
          {/* <input onChange={handleImgeSelect} id="cover-Upload" type="file" hidden /> */}
          {/* cover photo is not complete */}
          <input onChange={null} id="cover-Upload" type="file" hidden />
          <label htmlFor="cover-Upload">{"Edit cover photo"}</label>
        </div>
      )}
      {photo && (
        <div className="coverUpdateBtn" style={{ zIndex: 2 }}>
          <label htmlFor="cover-Upload">{"Save"}</label>
        </div>
      )}
    </>
  );
};

export default CoverPhotoUdate;
