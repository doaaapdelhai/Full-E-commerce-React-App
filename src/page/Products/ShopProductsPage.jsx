// import React from 'react';

import { Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Uitily/SearchCountResult";
import SideFilter from "../../Components/Uitily/SideFilter";
import { Col } from 'react-bootstrap';
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import PaginationCompontent from "../../Components/Uitily/Pagination";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight:'670px' }}>
      <CategoryHeader/>
      <Container> 
      <SearchCountResult title='400 نتيجة بحث' />

      <Row className="d-flex flex-row" >
      <Col sm="2" xs="2" md="1" className="d-flex" >
           <SideFilter/>
      </Col>

      <Col  sm="10" xs="10" md="11">
      <CardProductsContainer title="" btntitle= "" />
            
      </Col>
      </Row>
      <PaginationCompontent/>

      </Container>
    </div>
  );
}

export default ShopProductsPage;
