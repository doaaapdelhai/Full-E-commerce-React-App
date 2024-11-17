// import React from 'react';

// import NavBarLogin from "../../Components/Uitily/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
// import Footer from "../../Components/Uitily/Footer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight:'670px' }}>
      <Slider/>
      <HomeCategory/>
      <CardProductsContainer  title='الاكثر مبيعا'  btntitle  ="المزيد" pathText='/products'  />
      <DiscountSection/>
      <CardProductsContainer  title='احدث الازياء '  btntitle  ="المزيد"  pathText='/products' />
      <BrandFeatured  title="اشهر الماركات" btntitle="المزيد"   />   

    </div>
  );
}

export default HomePage;
// 