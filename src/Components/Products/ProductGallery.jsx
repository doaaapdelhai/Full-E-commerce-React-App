// import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../images/mobile.png'
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
const ProductGallery = () => {
    const images = [
        {
          original: `${mobile}`,
            },
        {
          original: `${mobile}`,
        },
        {
          original: `${mobile}`,
        },
      ];
  return (
    <div className="product-gallary-card d-flex justify-content-center align-items-center pt-2">
    <ImageGallery 
      items={images} 
      defaultImage={mobile} 
      showFullscreenButton={false} 
      isRTL={true} 
      showPlayButton={false} 
      showThumbnails={false} 
      renderRightNav={RightButton} 
      renderLeftNav={LeftButton} 
    //   autoPlay={true} 
    //   slideInterval={3000} 
    />
  </div>
  
  );
}

export default ProductGallery;
