import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../Redux/Actions/BrandAction";


const AllBrandHook = () => {
    
    const dispatch = useDispatch();

    // عند التحميل الأولي
    useEffect(() => {
      dispatch(getAllBrand(4));
    }, [dispatch]);
  
    const brand = useSelector((state) => state.allBrand.brand);
    const loading = useSelector((state) => state.allBrand.loading);
  
    // للحصول على عدد الصفحات
    let pageCount = 0;
    if (brand.paginationResult) {
      pageCount = brand.paginationResult.numberOfPages;
    }
  
    const getPage = (page) => {
      dispatch(getAllBrandPage(page));
      // عند الضغط على pagination
      console.log(page);
    };
    return[brand ,loading ,pageCount , getPage  ]
}
export default AllBrandHook;
