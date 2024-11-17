import { Container, Row, Col } from "react-bootstrap";
import UserSiadBar from "../../Components/User/UserSiadBar";
import UserProfile from "../../Components/User/UserProfile";
// import UserAddAddress from './../../Components/User/UserAddAddress';


const UserProfilePage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSiadBar/>
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserProfile/>
          
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfilePage;
