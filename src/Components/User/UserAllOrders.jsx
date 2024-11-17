import { Row } from "react-bootstrap";
import UserAllOrderItem from './UserAllOrderItem';

const UserAllOrders = () => {
  return (
    <div>
    <Row className="justify-content-between ">
      <div className="admin-content-text">اهلا محمد علي</div>
      <UserAllOrderItem/>
    </Row>
  </div>
)
}

export default UserAllOrders;
