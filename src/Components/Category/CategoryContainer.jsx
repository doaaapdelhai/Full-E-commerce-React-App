// import React, { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
const CategoryContainer = () => {
  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
          <CategoryCard title='اجهزهنزليه' img={clothe} background="#F4DBA5" />
          <CategoryCard title='اجهزهنزليه' img={cat2} background="#0034FF" />
          <CategoryCard title='اجهزهنزليه' img={labtop} background="#FFD3E8" />
          <CategoryCard title='اجهزهنزليه' img={clothe} background="#55CFDF" />
          <CategoryCard title='اجهزهنزليه' img={sale} background="#FF6262" />
          <CategoryCard title='اجهزهنزليه' img={pic} background="#F4DBA5" />
          <CategoryCard title='اجهزهنزليه' img={cat2} background="#0034FF" />
          <CategoryCard title='اجهزهنزليه' img={labtop} background="#FFD3E8" />
          <CategoryCard title='اجهزهنزليه' img={clothe} background="#55CFDF" />
          <CategoryCard title='اجهزهنزليه' img={sale} background="#FF6262" />
          <CategoryCard title='اجهزهنزليه' img={clothe} background="#F4DBA5" />
          <CategoryCard title='اجهزهنزليه' img={cat2} background="#0034FF" />
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
