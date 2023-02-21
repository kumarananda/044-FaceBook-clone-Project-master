/** @format */

import React, { useEffect } from "react";
import "./FullScreenModal.css";
import { useState } from "react";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";
import { useRef } from "react";

const FullScreenModal = ({
  children,
  modalName,
  modalTitle,
  btnElement,
  goPage,
  boxWidth,
  ZIndex,
  action,
  actionBtnName,
  headerHide,
  footerHide,
  outCickHide,
  topCloseLeft,
}) => {
  // modal state
  const ref = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCancelAct = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (outCickHide) {
      let handler = e => {
        if (!ref.current.contains(e.target)) {
          setModalOpen(false);
          // console.log(menuRef.current.contains(e.target));
        }
      };

      if (modalOpen) {
        document.addEventListener("mousedown", handler);
      }

      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  });

  const topClosePosition = topCloseLeft ? { left: "10px" } : {};

  return (
    <>
      <div onClick={() => setModalOpen(true)}>{btnElement ? btnElement : <button>btnElement</button>}</div>

      {/* <!-- MODAL BOX  --> */}
      {modalOpen && (
        <div style={{ zIndex: `${ZIndex ? ZIndex : 99999999}` }} className="modal-blur-box">
          <div ref={ref} className="refWraper">
            <div style={{ width: `${boxWidth ? boxWidth + "px" : "500px"}` }} className="modal-card">
              {headerHide && (
                <>
                  <div className="hide-header">
                    <button onClick={handleCancelAct}>
                      <GoX />
                    </button>
                  </div>
                </>
              )}
              {!headerHide && (
                <>
                  <div className="modal-header">
                    <div className="modal-header-content">
                      {modalName ? <span className="modalName">{modalName}</span> : <span className="modalName">modalName</span>}
                      {modalTitle && <span className="modalTitle">{modalTitle}</span>}
                    </div>
                    <button style={topClosePosition} onClick={() => setModalOpen(false)}>
                      <GoX />
                    </button>
                  </div>
                </>
              )}

              {children ? (
                children
              ) : (
                <span>
                  <div style={{ width: "100%", textAlign: "center" }} className="allProps">
                    All Props
                  </div>
                  <table style={{ width: "100%", textAlign: "center" }}>
                    <tr>
                      <th>Props</th>
                      <th>Data Type</th>
                      <th>Priority</th>
                    </tr>
                    <tr>
                      <td>modalName</td>
                      <td>Text</td>
                      <td>required</td>
                    </tr>
                    <tr>
                      <td>modalTitle</td>
                      <td>Text</td>
                      <td>Normal</td>
                    </tr>
                    <tr>
                      <td>btnElement</td>
                      <td>html</td>
                      <td>required</td>
                    </tr>
                    <tr>
                      <td>goPage</td>
                      <td>Object/key(to,action & text)</td>
                      <td>If footer</td>
                    </tr>
                    <tr>
                      <td>boxWidth</td>
                      <td>Number (px)</td>
                      <td>If change required</td>
                    </tr>
                    <tr>
                      <td>action</td>
                      <td>function</td>
                      <td>If change required</td>
                    </tr>
                    <tr>
                      <td>actionBtnName</td>
                      <td>String</td>
                      <td>If change required</td>
                    </tr>
                    <tr>
                      <td>header</td>
                      <td>String</td>
                      <td>If not required ("none")</td>
                    </tr>
                    <tr>
                      <td>footer</td>
                      <td>String</td>
                      <td>If not required ("none")</td>
                    </tr>
                    <tr>
                      <td>outCickHide</td>
                      <td>Boolean</td>
                      <td>Default false</td>
                    </tr>
                    <tr>
                      <td>topCloseLeft</td>
                      <td>Boolean</td>
                      <td>Default false</td>
                    </tr>
                  </table>
                </span>
              )}
              {!footerHide && (
                <>
                  <div style={{ marginTop: "6px" }} className="modal_footer">
                    <div className="modal-footer-content">
                      <div className="modal-footer-left">
                        {goPage ? (
                          <Link onClick={goPage.action ? goPage.action : null} className="goPage" to={goPage.to}>
                            {goPage.text}
                          </Link>
                        ) : (
                          <Link className="goPage" to="/">
                            goPage
                          </Link>
                        )}
                      </div>
                      <div className="modal-footer-right">
                        <div className="cancleBtn">
                          <button onClick={handleCancelAct}>Cancel</button>
                        </div>
                        <div className="updateBtn">
                          <button onClick={action ? action : null}>{actionBtnName ? actionBtnName : "Update"}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenModal;
