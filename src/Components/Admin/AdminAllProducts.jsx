// import React from 'react';

import { Row } from "react-bootstrap";
import AdminAllProducsCard from "./AdminAllProducsCard";

const AdminAllProducts = ({products}) => {
  return (
    <div>
    <div className="admin-content-text">ادراه جميع المنتجات </div>
    <Row className="justify-content-start"> 
    {
      products? (
       products.map((item , index)=>  <AdminAllProducsCard  key={index} item={item} />  )
        
      ) : <h4> لا يوجد منتجات حتي الان </h4>
    }
     
      </Row>
    </div>
  );
}

export default AdminAllProducts;
