// import React from 'react';

import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
// import AllBrandHook from "../../Hook/brand/All-brand-page";

const BrandContainer = ({data , loading}) => {

  return (
    <div className="my-3">
    <Container>
      <div className="admin-content-text ">كل الماركات</div>
      <Row className="my-1 justify-content-between">


          {/* <BrandCard img={brand1} /> */}

          {
                loading === false ? (
                    data ? (
                        data.map((item, index) => {
                            return (<BrandCard key={index} img={item.image} />)
                        })
                    ) : <h4>لا يوجد ماركات</h4>
                ) : <Spinner animation="border" variant="primary" />
            }

        </Row>
    </Container>
  </div>
  );
}

export default BrandContainer;
