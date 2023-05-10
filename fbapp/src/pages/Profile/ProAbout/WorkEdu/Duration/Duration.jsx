/** @format */

import React from "react";
import "./Duration.css";
import { useSelector } from "react-redux";
import { makeBirthYearArray } from "../../../../../utility/date";

//

const Duration = () => {
  // use seclector
  const { user } = useSelector(state => state.auth);

  // birth array
  const birtArray = makeBirthYearArray(user?.birth_year);

  return (
    <div>
      <h4 className="title">Time Period</h4>
      <div className="coruntlyWorked">
        <span>
          <input name="isCurrently" id={"workAdd"} type="checkbox" />
        </span>

        <h4>
          <label htmlFor="workAdd">I currently work here</label>
        </h4>
      </div>
      <div className="durationInput">
        <div className="fromTo">From</div>
        <div className="inputes year">
          <select name="yearFrom" id="">
            <option value="">Year</option>
            {birtArray.length > 0 &&
              birtArray.map((y, i) => (
                <option key={i} value={y}>
                  {y}
                </option>
              ))}
          </select>
        </div>
        <div className="inputes month">
          <select name="monthFrom" id="">
            <option value="">Month</option>
            <option value="">ffhh</option>
            <option value="">ffhhs</option>
          </select>
        </div>
        <div className="inputes day">
          <select name="dayFrom" id="">
            <option value="">Day</option>
            <option value="">ffhh</option>
            <option value="">ffhhs</option>
          </select>
        </div>

        {/* To */}
        <div className="fromTo">to</div>
        <div className="inputes year">
          <select name="yearTo" id="">
            <option value="">Year</option>
            <option value="">ffhh</option>
            <option value="">ffhhs</option>
          </select>
        </div>
        <div className="inputes month">
          <select name="monthTo" id="">
            <option value="">Month</option>
            <option value="">ffhh</option>
            <option value="">ffhhs</option>
          </select>
        </div>
        <div className="inputes day">
          <select name="daytTo" id="">
            <option value="">Day</option>
            <option value="">ffhh</option>
            <option value="">ffhhs</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Duration;
