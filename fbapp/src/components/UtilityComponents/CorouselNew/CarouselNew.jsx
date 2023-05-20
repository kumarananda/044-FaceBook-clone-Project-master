/** @format */

import React, { useState } from "react";
import "./CarouselNew.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useEffect } from "react";

const CarouselNew = ({ children, arraylan, item_width, item_height, show_items, button_size, btnHide }) => {
  // btn hide or disabled
  // let buttonType = btnHide ? true : false;
  // let buttonType = true;

  // initial // receive values
  let arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23.24];
  let itemWidth = item_width ? item_width : 100;
  let itemHeight = item_height ? item_height : 200;
  let itemMargin = 5;
  let showItems = show_items ? show_items : 5;
  let buttonSize = button_size ? button_size : 30;

  // calculate
  let totalItemWidth = itemWidth + itemMargin; //itemWidth + right margin
  let arryLangth = arraylan ? arraylan : arrayData.length;
  let steps = showItems;
  let carouselWidth = showItems * totalItemWidth;

  // states
  const [trns, setTrans] = useState(0);

  // calculate value
  let corroctionLabel = arryLangth / steps;
  let labelFlor = Math.floor(corroctionLabel);
  // let diffr = arryLangth - labelFlor * steps;
  const [diffr, setDiffr] = useState(arryLangth - labelFlor * steps);

  let nextDiffAcc = trns + steps === labelFlor * steps;

  // console.log(nextDiffAcc);
  // console.log(diffr);

  // controls events
  const goNext = () => {
    if (nextDiffAcc) {
      setTrans(trns + diffr);
    } else {
      setTrans(trns + steps);
    }
  };
  const goPrev = () => {
    if (diffr === trns) {
      setTrans(trns - diffr);
    } else {
      setTrans(trns - steps);
    }
  };

  useEffect(() => {
    setDiffr(arryLangth - labelFlor * steps);

    // }, [arryLangth, goNext, goPrev, nextDiffAcc, labelFlor]);
  }, [arryLangth, trns, diffr]);

  let rightBtn = trns >= arryLangth - showItems ? false : true;

  return (
    <>
      <div style={{ width: `${carouselWidth}px` }} className="carousel">
        <div style={{ transform: `translateX(-${trns * 100}%)`, width: `${itemWidth + itemMargin}px` }} className="oneWrapBox">
          <div style={{ width: `${totalItemWidth}px` }} className="carouselBox">
            {/* CorouselItem */}
            {children
              ? children
              : arrayData.map((item, index) => (
                  <>
                    <div
                      key={index}
                      style={{ minWidth: `${itemWidth}px`, minHeight: `${itemHeight}px`, marginRight: `${itemMargin}px` }}
                      className="carouselItem"
                    >
                      <div className="itemChildBox">{children ? children : `Items ${index + 1}`}</div>
                    </div>
                  </>
                ))}
          </div>
        </div>

        {/* buttons */}
        {true && (
          <>
            <button
              style={{ top: `${itemHeight / 2 - buttonSize / 4}px`, height: buttonSize, width: buttonSize, borderRadius: "50%" }}
              disabled={trns <= 0 ? true : false}
              onClick={goPrev}
              className="corousalBtn coro_left_btn"
            >
              <div style={{ fontSize: `${22}px`, height: `${buttonSize - 5}px` }}>
                <RiArrowLeftSLine />
              </div>
            </button>
            <button
              style={{ top: `${itemHeight / 2 - buttonSize / 4}px`, height: buttonSize, width: buttonSize, borderRadius: "50%" }}
              disabled={trns === arryLangth - showItems ? true : false}
              onClick={goNext}
              className="corousalBtn coro_right_btn"
            >
              <div style={{ fontSize: `${22}px`, height: `${buttonSize - 5}px` }}>
                <RiArrowRightSLine />
              </div>
            </button>
          </>
        )}

        {/* {buttonType && ( */}
        {false && (
          <>
            {/* buttons */}
            {trns > 0 && (
              <>
                <button
                  style={{ top: `${itemHeight / 2 - buttonSize / 1.5}px`, height: buttonSize, width: buttonSize, borderRadius: "50%" }}
                  disabled={trns <= 0 ? true : false}
                  onClick={goPrev}
                  className="corousalBtn coro_left_btn"
                >
                  <div style={{ fontSize: `${22}px`, height: `${buttonSize - 5}px` }}>
                    <RiArrowLeftSLine />
                  </div>
                </button>
              </>
            )}

            {rightBtn && (
              <>
                <button
                  style={{ top: `${itemHeight / 2 - buttonSize / 1.5}px`, height: buttonSize, width: buttonSize, borderRadius: "50%" }}
                  disabled={trns >= arryLangth - showItems ? true : false}
                  onClick={goNext}
                  className="corousalBtn coro_right_btn"
                >
                  <div style={{ fontSize: `${22}px`, height: `${buttonSize - 5}px` }}>
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

// export const CarouselNewItem = ({ children, itemWidth, itemHeight, itemMargin, index }) => {
//   let width = itemWidth ? itemWidth : 100;
//   let hight = itemHeight ? itemHeight : 200;
//   let margin = 5;

//   return (
//     <>
//       <div style={{ width: `${width}px`, height: `${hight}px`, marginRight: `${margin}px` }} className="carouselItem">
//         <div className="itemChildBox">{children ? children : `Items ${index + 1}`}</div>
//       </div>
//     </>
//   );
// };

export default CarouselNew;

/**
 *   // controls events
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
 */
