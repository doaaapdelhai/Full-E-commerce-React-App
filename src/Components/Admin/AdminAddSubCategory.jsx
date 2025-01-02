import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../Redux/Actions/CategoryAction";
import notify from "./../../Hook/UseNotifaction";
import { ToastContainer } from "react-toastify";
import { createSubCategory } from "../../Redux/Actions/SubCategoryAction";
import addSubcategoryhook from "../../Hook/subcategory/Add-subCategory-hook";
const AdminAddSubCategory = () => {

  const [id , name , loading , category , subcategory , handelChange , handelSubmit , onChangeName] = addSubcategoryhook();
 
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={name}
            onChange={ onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handelChange}
          >
            <option value="0">اختر تصنيق رائيسي</option>

            {category.data
              ? category.data.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {" "}
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
