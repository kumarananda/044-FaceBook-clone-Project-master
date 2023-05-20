/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { makeBirthYearArray, monthsDaysArray, montsFull } from "../../../../../utility/date";
import "./Duration.css";

//

const Duration = ({ handlefromChange, formData, isToFix, durationFor }) => {
  // use seclector
  const { user } = useSelector(state => state.auth);
  // birth array
  const birtArray = makeBirthYearArray(user?.birth_year);

  let dateToShow = true;
  if (isToFix) {
    dateToShow = true;
  } else if (!isToFix && !formData?.isCurrently) {
    dateToShow = true;
  } else if (!isToFix && formData?.isCurrently) {
    dateToShow = false;
  }

  console.log(dateToShow);

  return (
    <div className="durationSec">
      <div className="coruntlyWorked">
        {durationFor === "education" && (
          <>
            <span>
              <input checked={formData.isGraduated} name="isGraduated" id="isGraduated" type="checkbox" onChange={handlefromChange} />
            </span>
            <h4>
              <label htmlFor="isGraduated">Graduated</label>
            </h4>
          </>
        )}
      </div>
      <h4 className="title">Time Period</h4>
      <div className="coruntlyWorked">
        {!isToFix && (
          <>
            <span>
              <input checked={formData.isCurrently} name="isCurrently" id={"workAdd"} type="checkbox" onChange={handlefromChange} />
            </span>
            <h4>
              <label htmlFor="workAdd">I currently work here</label>
            </h4>
          </>
        )}
      </div>
      <div className="durationInput">
        <div className="fromTo">From</div>
        <div className="inputes year">
          <select value={formData?.yearFrom} name="yearFrom" onChange={handlefromChange}>
            <option value="">Year</option>
            {birtArray.length > 0 &&
              birtArray.map((y, i) => (
                <option key={i} value={y}>
                  {y}
                </option>
              ))}
          </select>
        </div>
        {formData?.yearFrom && (
          <div className="inputes month">
            <select value={formData?.monthFrom} name="monthFrom" onChange={handlefromChange}>
              <option value="">Month</option>
              {montsFull.length > 0 &&
                montsFull.map((y, i) => (
                  <option key={i} value={y}>
                    {y}
                  </option>
                ))}
            </select>
          </div>
        )}

        {formData?.yearFrom && formData?.monthFrom && (
          <div className="inputes day">
            <select value={formData?.dayFrom} name="dayFrom" onChange={handlefromChange}>
              <option value="">Day</option>
              {monthsDaysArray(formData?.yearFrom, formData?.monthFrom).map((day, i) => (
                <option key={i} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        )}

        {dateToShow && (
          <>
            <div className="fromTo">to</div>
            <div className="inputes year">
              <select name="yearTo" value={formData?.yearTo | ""} onChange={handlefromChange}>
                <option value="">Year</option>
                {birtArray.length > 0 &&
                  birtArray.map((y, i) => (
                    <option key={i} value={y} disabled={y < formData.yearFrom}>
                      {y}
                    </option>
                  ))}
              </select>
            </div>
            {formData?.yearTo && (
              <div className="inputes month">
                <select name="monthTo" value={formData?.monthTo} onChange={handlefromChange}>
                  <option value="">Month</option>
                  {montsFull.length > 0 &&
                    montsFull.map((y, i) => (
                      <option key={i} value={y}>
                        {y}
                      </option>
                    ))}
                </select>
              </div>
            )}
            {formData?.monthTo && formData?.yearTo && (
              <div className="inputes day">
                <select name="daytTo" value={formData?.daytTo} onChange={handlefromChange}>
                  <option value="">Day</option>
                  {monthsDaysArray(formData?.yearTo, formData?.monthTo).map((day, i) => (
                    <option key={i} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Duration;
