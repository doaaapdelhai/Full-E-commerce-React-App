import { Row, Col, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategoryHook from "../../Hook/category/Add-category-hook";
const AdminAddCategory = () => {

  // destracting
 const [ img , name , loading , isPress , onImageChange , handleSubmit , onChangeName]  = AddCategoryHook();

// console.log(img);

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">اضف تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="التصنيف"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
              style={{ display: "none" }}
            />
          </div>
          <input
            onChange={onChangeName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      
      {isPress && (
        loading ? (
          <Row>
            <Col sm="8" className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" variant="primary" />
              <span className="ml-2">جاري التحميل</span>
            </Col>
          </Row>
        ) : (
          <h4>تم الانتهاء</h4>
        )
      )}
      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
