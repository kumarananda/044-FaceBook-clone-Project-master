/** @format */

import React from "react";
import "./CardBox.css";

const CardBox = ({ children, widt, bgc, pad, headerJSX }) => {
  return (
    <>
      <div
        style={{ padding: `${pad ? pad : "12px"}`, width: `${widt ? widt : "auto"}`, backgroundColor: `${bgc ? bgc : "#fff"}` }}
        className="cardBox "
      >
        {headerJSX && (
          <div style={{}}>
            <div className="header">
              <div className="headerItem">
                <div className="top">
                  <h4>
                    <a href={headerJSX.link}>{headerJSX.title}</a>
                  </h4>
                  <button onClick={headerJSX.seeAll}>{headerJSX.buttonTxt}</button>
                </div>
              </div>
              {headerJSX.friends && <div className="headerCount">{headerJSX.friends} Friends</div>}
              <div style={{ height: "10px" }} className="marginSpace"></div>
            </div>
          </div>
        )}

        <div style={{ overflow: "hidden", width: `100%`, backgroundColor: `${bgc ? bgc : "#fff"}` }}>{children}</div>
      </div>
    </>
  );
};

export default CardBox;
