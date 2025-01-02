// import React, { useState, useRef } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
// import clothe from "../../images/clothe.png";


// import cat2 from "../../images/cat2.png";
// import labtop from "../../images/labtop.png";
// import sale from "../../images/sale.png";
// import pic from "../../images/pic.png";
const CategoryContainer = ({data , loading}) => {


  const colors = ['#FFD3E8' , '#F4DBA5' , '#55CFDF' , '#FF6262' , '#0034FF' , '#FFD3E8']



  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
          {/* <CategoryCard title='اجهزهنزليه' img={clothe} background="#F4DBA5" /> */}

          {
                    loading === false ? (
                        data ? (
                            data.map((item, index) => {
                              return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5) + 1]} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }

        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
