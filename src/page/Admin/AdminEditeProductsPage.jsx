import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
// import AdminAddProducts from "../../Components/Admin/AdminAddProducts";
import AdminEditeProducts from "../../Components/Admin/AdminEditeProducts";

const AdminEditeProductsPage = () => {
  return (
    <Container>
    <Row className="py-3">
        <Col sm="3" xs="2" md="2">
           <AdminSideBar/>
        </Col>

        <Col  sm="9" xs="10" md="10">
        <AdminEditeProducts/>

        </Col>
    </Row>
     
    </Container>
  );
}



export default AdminEditeProductsPage;
