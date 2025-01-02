
import { Container } from 'react-bootstrap';
import CategoryHeader from './../../Components/Category/CategoryHeader';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import ViewProductDetailsHook from '../../Hook/products/View-product-details-hook';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const ProductDetalisPage = () => {
  const { id } = useParams();


  // console.log(id);
   const  [item , images , cat , prod] = ViewProductDetailsHook(id)

   if(prod)
    var items  = prod.slice(0 , 4)

   
  return (
    <div style={{ minHeight:'670px' }}>
      <CategoryHeader/>
      <Container>
      <ProductDetails/>
      <RateContainer/>
      <CardProductsContainer products={items} title="منتجات قد تعجبك" />
      </Container>
    
    </div>
  );
};

export default ProductDetalisPage;
