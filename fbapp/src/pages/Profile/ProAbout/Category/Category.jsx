/** @format */
import "./Category.css";
import React, { useEffect, useState } from "react";
import AddCirclePlus, { DetailsItemShow } from "../../../../components/UtilityComponents/AddCirclePlus/AddCirclePlus";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../../redux/auth/authAction";
import icons from "../../../../_assets/icons/post-menu.png";

const Category = () => {
  const dispatch = useDispatch();
  // use selector
  const { user } = useSelector(state => state.auth);

  // state
  // const [category, setCategory] = useState(user?.category ? user?.category : {});
  const [category, setCategory] = useState({
    cat: user?.category?.cat,
    show: user?.category?.show,
  });
  const [editshow, setEditshow] = useState(false);

  // handle
  const handleEditshow = () => {
    setEditshow(!editshow);
  };
  const handlecategoryChange = e => {
    setCategory(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //  setToolBorder(prev => ({ ...prev, [e.target.name]: false }));
  // data update
  const handlecategoryUpdate = async e => {
    e.preventDefault();
    dispatch(updateUserData({ ...user, category: category }, setEditshow));
  };
  console.log(user);

  useEffect(() => {
    setCategory(prev => ({
      cat: user?.category?.cat,
      show: user?.category?.show,
    }));
  }, [user]);

  let remain = 20 - (category?.cat ? category?.cat.length : 0);

  // handle add form
  const formShow = () => {
    setEditshow(!editshow);
  };

  console.log(category.cat);
  console.log(category.show);

  return (
    <>
      <h4 className="title">Category</h4>
      {!editshow && user?.category?.cat && (
        <DetailsItemShow type={"category"} action={{ edit: formShow, editName: "Category" }} data={{ title: user.category.cat }} />
      )}
      {editshow && (
        <>
          <div className="textEdit">
            <textarea
              value={category.cat}
              onChange={handlecategoryChange}
              name="cat"
              // onResize={false}
              onResize={{ autosize: false }}
              placeholder={category.cat ? category.cat : "Add Category"}
              style={{}}
              rows="3"
            ></textarea>
            <div className="remaning">
              <p>{remain} characters remaining </p>
            </div>
            <div className="controls">
              <div className="conLeft">
                <i style={{ backgroundImage: `url(${icons})` }}></i>
                <h5>Public</h5>
              </div>
              <div className="conRight">
                <button onClick={handleEditshow} className="cancel">
                  Cancel
                </button>

                <button disabled={remain < 0 || category.cat === user.category.cat ? true : false} onClick={handlecategoryUpdate} className="save">
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {!editshow && <AddCirclePlus action={formShow} title={!user?.category?.cat ? "Add category" : "Edit category"} />}
    </>
  );
};

export default Category;
