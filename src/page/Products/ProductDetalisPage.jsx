
import { Container } from 'react-bootstrap';
import CategoryHeader from './../../Components/Category/CategoryHeader';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';

const ProductDetalisPage = () => {
  return (
    <div style={{ minHeight:'670px' }}>
      <CategoryHeader/>
      <Container>
      <ProductDetails />
      <RateContainer/>
      <CardProductsContainer title="منتجات قد تعجبك" />
      </Container>
    
    </div>
  );
};

export default ProductDetalisPage;
