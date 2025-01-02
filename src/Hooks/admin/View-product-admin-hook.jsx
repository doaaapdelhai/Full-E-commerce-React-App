import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../Redux/Actions/ProductsAction";

const ViewProductAdminHook = () => {
    const dispatch = useDispatch();

    // استدعاء API للحصول على المنتجات عند تحميل المكون
    useEffect(() => {
        dispatch(getAllProducts(12));   //اول صفحه للعرض
    }, [dispatch]);


    const onPress = async(page)=>{
        await  dispatch(getAllProductsPage(page , 12))
        }


    // الحصول على البيانات من الـ Redux
    const allProducts = useSelector((state) => state.allproducts.allProducts);
    let items = [];
    let paginationResult = [];


try{
    // معالجة البيانات
    // let items = [];
    // let paginationResult = [];

    if (allProducts?.data) {
        items = allProducts.data;
    }

    if (allProducts?.paginationResult) {
        paginationResult = allProducts.paginationResult.numberOfPages;
    }
}catch(e){}

    // إرجاع البيانات
    return [items, paginationResult , onPress];
};

export default ViewProductAdminHook;
