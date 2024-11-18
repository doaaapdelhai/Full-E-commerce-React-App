import { Container } from "react-bootstrap";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Uitily/Pagination";
import { useSelector , useDispatch } from "react-redux";
import {getAllCategory} from '../../Redux/Actions/CategoryAction';
import { useEffect } from "react";

 export const AllCategoryPage = () => {

      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getAllCategory());

      }, [])

      const data = useSelector(state =>state.allCategory.category )
      const loading = useSelector(state =>state.allCategory.loading )
      
      console.log(data.data);
      console.log(loading);
      


  return (
    <Container style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <PaginationCompontent/>
    </Container>
  );
};

export default AllCategoryPage;
