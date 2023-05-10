/** @format */

import React, { useState } from "react";
import { aIn, iAcIn, textAria } from "./style";

const LableInput = ({ placeholder, type = "text", inputChange = null, value = "", name }) => {
  const [active, setActive] = useState(false);
  const fildStatus = active ? aIn : iAcIn;
  const textAriaStatus = active ? {} : { fontSize: "8px" };
  const contHight = type === "textarea" ? { height: "80PX" } : { height: "58px" };

  const handleActiveFild = e => {
    setActive(true);
    // e.tatget.focus();
  };
  const handleBlurInactiv = e => {
    if (e.target.value) {
    } else {
      setActive(false);
    }
  };
  return (
    <>
      <div style={fildStatus.wrap}>
        <div style={{ ...fildStatus.cont, ...contHight }}>
          <label style={{ ...fildStatus.label }}>
            {placeholder}
            {type === "text" && (
              <input
                name={name}
                onClick={handleActiveFild}
                onBlur={handleBlurInactiv}
                value={value}
                onChange={inputChange}
                style={{ ...fildStatus.input }}
                type={type}
              />
            )}
            {type === "textarea" && (
              <textarea onClick={handleActiveFild} onBlur={handleBlurInactiv} style={{ ...textAria, ...textAriaStatus }} value={value} name="desc" />
            )}
          </label>
        </div>
      </div>
    </>
  );
};

export default LableInput;
