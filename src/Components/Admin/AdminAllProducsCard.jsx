// import React from "react";
import { useState } from "react";
import { Col, Row, Card, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts } from "../../Redux/Actions/ProductsAction";
// import prod1 from "../../images/prod1.png";
const AdminAllProducsCard = ({item}) => {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handelDelete =async () => {

  await  dispatch(deleteProducts(item._id))
    
  setShow(false);
  window.location.reload()



  };

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
    {/* modal  for makeSure to delete product */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title> <div className="font">تاكيد الحذف</div></Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font">   هل انت متاكد من عمليه الحذف ؟  </div></Modal.Body>
        <Modal.Footer>
          <Button  className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button  className="font" variant="dark " onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>








      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}>
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit"   >ازاله</div>
            <Link to={`/admin/editeproduct/${item._id}`} style={{ textDecoration: "none" }}>  
            <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
              {item.title}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{item.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{item.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProducsCard;
