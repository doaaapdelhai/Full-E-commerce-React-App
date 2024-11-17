// import React from 'react';

import { Row } from "react-bootstrap";
import AdminAllProducsCard from "./AdminAllProducsCard";

const AdminAllProducts = () => {
  return (
    <div>
    <div className="admin-content-text">ادراه جميع المنتجات </div>
    <Row className="justify-content-start"> 
      <AdminAllProducsCard/>
      <AdminAllProducsCard/>
      <AdminAllProducsCard/>
      <AdminAllProducsCard/>
      <AdminAllProducsCard/>
      <AdminAllProducsCard/>
      <AdminAllProducsCard/>
      </Row>
    </div>
  );
}

export default AdminAllProducts;
