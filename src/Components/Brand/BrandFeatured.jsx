// import  { useState, useRef } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Uitily/SubTitle";
import HomeBrandHook from "../../Hook/brand/Home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [brand, loading] = HomeBrandHook();
  // console.log(brand.data.length);
  return (
    <Container>


        <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
        <Row className='my-1 d-flex justify-content-between'>
            {
                loading === false ? (
                    brand.data ? (
                        brand.data.slice(0, 5).map((item, index) => {
                            return (<BrandCard key={index} img={item.image} />)
                        })
                    ) : <h4>لا يوجد ماركات</h4>
                ) : <Spinner animation="border" variant="primary" />
            }
        </Row>



    </Container>
)
  
};

export default BrandFeatured;
