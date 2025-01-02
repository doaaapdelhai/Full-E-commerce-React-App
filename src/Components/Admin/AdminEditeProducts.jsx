import { Row, Col } from "react-bootstrap";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";

import { ToastContainer } from "react-toastify";
import AdminAddProductHook from "../../Hook/products/Add-products-hook";
import { useParams } from "react-router-dom";
import AdminEditeProductHook from "../../Hook/products/Edite-products-hook";


const AdminEditeProducts = () => {

  const {id} = useParams();

  const [catID , brandID, onChangeDesName  ,onChangeQty, onChangeColor , onChangePriceAfter  ,onChangePriceBefore , onChangeProdName
    , showColor , category , brand , priceAfter , images , setImages , onselect , onRemove , options,
          handelChangeComplete , removeColor , onSelectCategory , handelSubmit , onSelectBrand , colors , 
          priceBefore , qty , prodDescription , prodName ,onSelect ]= AdminEditeProductHook(id)
    


    return (
      <div>
        <Row className="justify-content-start ">
          <div className="admin-content-text pb-4">تعديل المنتج - {prodName}</div>
          <Col sm="8">
            <div className="text-form pb-2"> صور للمنتج</div>
            <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}
                    />
            {/* <img src={avatar} alt="" height="100px" width="120px" /> */}
            <input
              value={prodName}
              onChange={onChangeProdName}
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder="اسم المنتج"
            />
            <textarea
              className="input-form-area p-2 mt-3"
              rows="4"
              cols="50"
              placeholder="وصف المنتج"
              value={prodDescription}
              onChange={onChangeDesName}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3"
              placeholder="السعر قبل الخصم"
              value={priceAfter}
              onChange={onChangePriceAfter}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3"
              placeholder="السعر بعد الخصم"
              value={priceBefore}
              onChange={onChangePriceBefore}
            />
  
            <input
              type="number"
              className="input-form d-block mt-3 px-3"
              placeholder=" الكميه المتاحه"
              value={qty}
              onChange={onChangeQty}
            />
  
            <select
              name="cat"
              value={catID}
              // id="lang"
              onChange={onSelectCategory}
              className="select input-form-area mt-3 px-2 "
            >
              <option value="0">التصنيف الرئيسي</option>
  
              {
                category.data
                ? category.data.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                  })
                : null
                }
            </select>
  
            <Multiselect
              className="mt-2 text-end"
              placeholder="التصنيف الفرعي"
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              style={{ color: "red" }}
              maxImageSize={null} 
            />
            <select
              name="brand"
              value={brandID}
              // id="brand"
              onChange={onSelectBrand}
              className="select input-form-area mt-3 px-2 "
            >
              <option value="0"> اختر ماركة </option>
              {brand.data
                ? brand.data.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                  })
                : null}
            </select>
            <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
            <div className="mt-1 d-flex">
              {colors.length >= 1
                ? colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => removeColor(color)}
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })
                : null}
  
              <img
                onClick={onChangeColor}
                src={add}
                alt=""
                width="30px"
                height="35px"
                style={{ cursor: "pointer" }}
              />
              {showColor === true ? (
                <CompactPicker onChangeComplete={handelChangeComplete} />
              ) : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
  
          </Col>
        </Row>
        <ToastContainer/>
      </div>
    );
}

export default AdminEditeProducts;
