import { Row, Col, Spinner } from "react-bootstrap";
// import AllBrandHook from "../../Hook/brand/All-brand-page-hook";
import AddBrandHook from './../../Hook/brand/Add-brand-hook';
import { ToastContainer } from "react-toastify";

const AdminAddBrand = () => {

  const [img, name, loading, isPress, onImageChange  , handleSubmit, onChangeName] = AddBrandHook();
  return (
      <div>
          <Row className="justify-content-start ">
              <div className="admin-content-text pb-4">اضف ماركه جديده</div>
              <Col sm="8">
                  <div className="text-form pb-2">صوره الماركه</div>
                  <div>
                      <label for="upload-photo">
                          <img
                              src={img}
                              alt="fzx"
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
                      />
                  </div>
                  <input
                      type="text"
                      value={name}
                      className="input-form d-block mt-3 px-3"
                      placeholder="اسم الماركه"
                      onChange={onChangeName}
                  />
              </Col>
          </Row>
          <Row>
              <Col sm="8" className="d-flex justify-content-end ">
                  <button onClick={handleSubmit } className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
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
  )
}
export default AdminAddBrand;
