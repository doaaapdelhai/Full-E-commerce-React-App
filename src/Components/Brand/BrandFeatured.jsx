import  { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Uitily/SubTitle";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
const BrandFeatured = ({ title, btntitle }) => {
//   if (pathText === "") {
    // pathText = "404";
//   }
  return (
    <div className="my-3">
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
        <Row className="my-1 justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
        </Row>
      </Container>
    </div>
  );
};

export default BrandFeatured;
