/** @format */

import React, { useEffect, useRef, useState } from "react";

const MouseDownModal = ({ children, click_btn, btn_class }) => {
  const ref = useRef();

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    let handler = e => {
      if (!ref.current.contains(e.target)) {
        setDropdown(false);
        // console.log(menuRef.current.contains(e.target));
      }
    };

    if (dropdown) {
      document.addEventListener("mousedown", handler);
    }

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div ref={ref} className="MDModalBody">
        <button className={btn_class ? btn_class : ""} onClick={() => setDropdown(!dropdown)}>
          {click_btn ? (
            click_btn
          ) : (
            <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em">
              <g fillRule="evenodd" transform="translate(-446 -350)">
                <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
              </g>
            </svg>
          )}
        </button>
        {dropdown && (children ? children : <span>MouseDownModal</span>)}
      </div>
    </>
  );
};

export default MouseDownModal;
