
import { Col, Container, Row } from "react-bootstrap";
import UserSiadBar from "../../Components/User/UserSiadBar";
import UserFavoriteProduct from "../../Components/User/UserFavoriteProduct";

const UserFavoriteProductsPage = () => {
    return (
        <Container>
          <Row className="py-3">
            <Col sm="3" xs="2" md="2">
              <UserSiadBar/>
            </Col>
            <Col sm="9" xs="10" md="10">
              <UserFavoriteProduct/>
            </Col>
          </Row>
        </Container>
      );
}

export default UserFavoriteProductsPage;
