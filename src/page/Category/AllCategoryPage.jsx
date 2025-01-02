import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Uitily/Pagination";
import AllCategoryPageHook from './../../Hook/category/All-category-page-hook';


export const AllCategoryPage = () => {
 const [category ,loading ,pageCount , getPage ] = AllCategoryPageHook();

  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount > 1 ? (
        <PaginationCompontent pageCount={pageCount} onPress={getPage} />
      ) : null}
    </Container>
  );
};

export default AllCategoryPage;
