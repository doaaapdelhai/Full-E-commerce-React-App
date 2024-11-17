// import React from 'react';

import { Row } from "react-bootstrap";
import ProductCard from './../Products/ProductCard';
import PaginationCompontent from "../Uitily/Pagination";

const UserFavoriteProduct = () => {
  return (
    <div>
          <div className="admin-content-text">قائمة المفضلة</div>
          <Row className="justify-content-start">
          <ProductCard  />
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>

          </Row>
          <PaginationCompontent/>
    </div>
  );
}

export default UserFavoriteProduct;
