import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory, getAllCategoryPage } from "../../Redux/Actions/CategoryAction";


const AllCategoryPageHook = () => {
    const dispatch = useDispatch();

    // عند التحميل الأولي
    useEffect(() => {
      dispatch(getAllCategory(6));
    }, [dispatch]);
  
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);
  
    // للحصول على عدد الصفحات
    let pageCount = 0;
    if (category.paginationResult) {
      pageCount = category.paginationResult.numberOfPages;
    }
  
    const getPage = (page) => {
      dispatch(getAllCategoryPage(page));
      // عند الضغط على pagination
      // console.log(page);
    };
    return[category ,loading ,pageCount , getPage  ]
}

export default AllCategoryPageHook;
