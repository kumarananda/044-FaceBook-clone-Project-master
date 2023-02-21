/** @format */

import React, { useState } from "react";
import "./Carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Carousel = ({ children, arraylan, item_width, item_height, show_items, button_size, btnHide, storyleftbtn }) => {
  // btn hide or disabled
  let buttonType = btnHide ? true : false;
  // let buttonType = true;
  let btnPosi = 0;

  // initial // receive values
  let arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let itemWidth = item_width ? item_width : 100;
  let itemHeight = item_height ? item_height : 200;
  let itemMargin = 5;
  let showItems = show_items ? show_items : 5;
  let buttonSize = button_size ? button_size : 40;

  // console.log(itemWidth);
  // console.log(itemHeight);

  // calculate
  let totalItemWidth = itemWidth + itemMargin; //itemWidth + right margin
  let arryLangth = arraylan ? arraylan : arrayData.length;
  let steps = showItems;
  let corouselWidth = showItems * totalItemWidth;
  // let maxtranslateX = totalItemWidth * arryLangth - steps * totalItemWidth;

  // console.log(totalItemWidth);
  // states
  const [trns, setTrans] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [diffrun, setDiffrun] = useState(false);

  // calculate value
  let corroctionLabel = arryLangth / steps;
  let labelFlor = Math.floor(corroctionLabel);
  // let labelCeil = Math.ceil(corroctionLabel);
  let position = labelFlor * steps;
  let diffr = corroctionLabel - labelFlor;

  // controls events
  const goNext = () => {
    setTrans(trns + steps);
    if (position - steps === trns) {
      setTranslateX(translateX + steps * 100 * diffr);
      setDiffrun(true);
    } else {
      setTranslateX(translateX + steps * 100);
    }
  };
  const goPrev = () => {
    setTrans(trns - steps);
    if (diffrun) {
      setTranslateX(translateX - steps * 100 * diffr);
      setDiffrun(false);
    } else {
      setTranslateX(translateX - steps * 100);
    }
  };

  let rightBtn = trns >= arryLangth - showItems ? false : true;

  // console.log("translateX");
  // console.log(translateX);
  // console.log(maxtranslateX);
  // console.log(trns);

  return (
    <>
      <div style={{ width: `${corouselWidth}px` }} className="carousel">
        <div style={{ transform: `translateX(-${translateX}%)`, width: `${totalItemWidth}px` }} className="corouselBox">
          {/* CorouselItem */}
          {children
            ? children
            : arrayData.map((item, index) => (
                <CorouselItem key={index} itemWidth={itemWidth} itemHeight={itemHeight} itemMargin={itemMargin} index={index}>
                  {/* <div>Item {item}</div>
                  <div>index {index}</div> */}
                </CorouselItem>
              ))}
        </div>

        {/* buttons */}
        {!buttonType && (
          <>
            <button
              style={{ left: btnPosi, top: `${itemHeight / 2 - buttonSize / 4}px`, height: buttonSize, width: buttonSize, borderRadius: "50%" }}
              disabled={trns <= 0 ? true : false}
              onClick={goPrev}
              className="corousalBtn coro_left_btn"
            >
              <div style={{ fontSize: `${30}px`, height: `${buttonSize - 10}px` }}>
                <RiArrowLeftSLine />
              </div>
            </button>
            <button
              style={{
                right: btnPosi`${5}px`,
                top: `${itemHeight / 2 - buttonSize / 4}px`,
                height: buttonSize,
                width: buttonSize,
                borderRadius: "50%",
              }}
              disabled={trns >= arryLangth - showItems ? true : false}
              onClick={goNext}
              className="corousalBtn coro_right_btn"
            >
              <div style={{ fontSize: `${30}px`, height: `${buttonSize - 10}px` }}>
                <RiArrowRightSLine />
              </div>
            </button>
          </>
        )}

        {buttonType && (
          <>
            {/* buttons */}
            {trns > 0 && (
              <>
                <button
                  style={{ left: btnPosi, top: `${itemHeight / 2 - buttonSize / 1.5}px`, height: buttonSize, width: buttonSize, borderRadius: "50%" }}
                  disabled={trns <= 0 ? true : false}
                  onClick={goPrev}
                  className="corousalBtn coro_left_btn"
                >
                  <div style={{ fontSize: `${30}px`, height: `${buttonSize - 10}px` }}>
                    <RiArrowLeftSLine />
                  </div>
                </button>
              </>
            )}

            {rightBtn && (
              <>
                <button
                  style={{
                    right: btnPosi,
                    top: `${itemHeight / 2 - buttonSize / 1.5}px`,
                    height: buttonSize,
                    width: buttonSize,
                    borderRadius: "50%",
                  }}
                  disabled={trns >= arryLangth - showItems ? true : false}
                  onClick={goNext}
                  className={`corousalBtn coro_right_btn`}
                >
                  <div style={{ fontSize: `${30}px`, height: `${buttonSize - 10}px` }}>
                    <RiArrowRightSLine />
                  </div>
                </button>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export const CorouselItem = ({ children, itemWidth, itemHeight, itemMargin, index }) => {
  let width = itemWidth ? itemWidth : 100;
  let hight = itemHeight ? itemHeight : 200;
  let margin = 5;

  return (
    <>
      <div style={{ minWidth: `${width}px`, width: `${width}px`, height: `${hight}px`, marginRight: `${margin}px` }} className="corouselItem">
        <div style={{ height: "100%", width: "100%" }} className="itemChildBox">
          {children ? children : `Items ${index + 1}`}
        </div>
      </div>
    </>
  );
};

export default Carousel;
