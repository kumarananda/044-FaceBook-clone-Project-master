/** @format */

import { useRef, useState } from "react";
import useMouseDown from "../../../../hooks/useMousdown";
import { MdPublic } from "react-icons/md";
import { BsStar, BsThreeDots, BsTrash } from "react-icons/bs";
import CardBox from "../../../../components/UtilityComponents/CardBox/CardBox";
import { HiOutlinePencil } from "react-icons/hi";
import "./WorKEdu.css";
// C:\aks\reaF\currentfile\044 FaceBook Project\fbapp\src\pages\Profile\ProAbout\Category\Category.css

const DetailsItemShow = ({ data, action, deleindx, del, type, indx = null }) => {
  const popref = useRef(null);
  const [popup, setPopup] = useState(false);
  useMouseDown(popref, popup, setPopup);

  const handlePopUp = () => {
    deleindx(indx);
    setPopup(!popup);
  };

  // will update

  return (
    <>
      <div className="DetailsItemShow">
        <div className="itemLeft">
          <span className="iconBox">
            <img src={`/ItemShowIcon/${type ? type : "study"}.png`} alt="" />
          </span>

          <span style={{ display: "block" }} className="textBox">
            <h4>{data?.title}</h4>
            <h5 style={{ display: "block" }}>{data?.duration}</h5>
            <h6>{data?.sub} </h6>
          </span>
        </div>
        <div className="itemRight">
          <span className="viewIcon">
            <button className="roundBtn">
              <MdPublic />
            </button>
          </span>
          <span ref={popref} className="buttonBox">
            <button onClick={handlePopUp} className="roundBtn">
              <BsThreeDots />
            </button>

            {/* must action will be frist and than popup */}
            {/* beacuse popup is a ref type action & is depended with actions */}
            {action && popup && (
              <>
                <div className="popupBox">
                  <CardBox pad={"8px"} widt={"290px"}>
                    {action?.see && (
                      <>
                        <button>
                          <BsStar />
                          <span>See life Event</span>
                        </button>
                      </>
                    )}
                    {action?.edit && (
                      <>
                        <button onClick={() => action?.edit(indx)}>
                          <HiOutlinePencil />
                          <span>Edit {action?.editName}</span>
                        </button>
                      </>
                    )}

                    <>
                      <div>
                        <button onClick={del}>
                          <BsTrash />
                          <span>Delete </span>
                        </button>
                      </div>
                    </>
                  </CardBox>
                </div>
              </>
            )}
          </span>
          {/* form */}
          {}
        </div>
      </div>
    </>
  );
};
export default DetailsItemShow;
