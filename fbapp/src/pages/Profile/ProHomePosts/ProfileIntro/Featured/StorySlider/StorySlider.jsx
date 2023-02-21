/** @format */

import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./StorySlider.css";
// import { feature1, feature2, feature3, feature4 } from "../../../../../../faker/faker";

const StorySlider = ({ setShow, data, apiPath }) => {
  const [popItemIndex, setSliderItemInd] = useState(0);
  console.log(data?.length);

  // const goNext = () => {
  //   setSliderItemInd(popItemIndex + 1);
  // }; // if use next disable
  const goNext = () => {
    if (popItemIndex === data?.length - 1) {
      setShow(false);
    } else {
      setSliderItemInd(popItemIndex + 1);
    }
  };
  const goPrev = () => {
    setSliderItemInd(popItemIndex - 1);
  };

  useEffect(() => {
    let timeout;
    // if require auto close
    if (data.length - 1 !== popItemIndex) {
      timeout = setTimeout(() => {
        setSliderItemInd(popItemIndex + 1);
      }, 5000);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }

    // // if require infinity loop
    // const timeout = setTimeout(() => {
    //   setSliderItemInd((popItemIndex + 1) % feature3.length);
    // }, 5000);

    return () => clearTimeout(timeout);
  }, [popItemIndex]);

  return (
    <>
      <div className="StorySlider">
        <div className="StorySliderBox">
          <div className="btn leftBtn">
            <button disabled={popItemIndex === 0 ? true : false} onClick={goPrev}>
              <BsChevronLeft style={{ width: "30px", height: "30px" }} />
            </button>
          </div>

          <div className="btn rightBtn">
            <button onClick={goNext}>
              <BsChevronRight style={{ width: "30px", height: "30px" }} />
            </button>
            {/* <button disabled={popItemIndex === feature3.length - 1 ? true : false} onClick={goNext}>
              <BsChevronRight />
            </button> */}
          </div>
          <div className="sliderItem" style={{ backgroundImage: `url(${apiPath + data[popItemIndex]})` }}>
            <div className="sliderBar">
              {data.map((item, index) => (
                <>
                  <div key={index} className="barItem">
                    <div className={`progress   ${popItemIndex === index ? "active" : ""}`}></div>
                    <div className={`progress viewed-position  ${index < popItemIndex ? "viewed" : ""}`}></div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySlider;
