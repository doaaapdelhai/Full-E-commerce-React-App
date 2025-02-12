// import React from 'react';

import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Uitily/SubTitle";

const CardProductsContainer = ({title ,btntitle , pathText , products }) => {
  return (
    <Container>
  { 
    products ? (<SubTitle title={title} btntitle={btntitle}  pathText={pathText} />) : null  
  }
    <Row className="my-2 d-flex justify-content-between">

    {
      products ? (

        products.map((item , index ) => <ProductCard  key={index}  item={item} />)
      ) : null
    }
    
    
    
    </Row>
  </Container>
  );
}

export default CardProductsContainer;
