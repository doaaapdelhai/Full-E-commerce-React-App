import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../Redux/Actions/ProductsAction";




const ViewSearchProductsHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(10))
    }, [])

    const allProducts = useSelector((state)=>state.allproducts.allProducts)
    // if(allProducts.data)
    // console.log(allProducts.data);

    let items =[];
    if(allProducts.data)
    items=allProducts.data;
    else
    items = []
    return [items]
    // ---------------

    if (allProducts?.paginationResult) {
        paginationResult = allProducts.paginationResult.numberOfPages;
    }
return[item , paginationResult, onPress ]

    const onPress = async(page)=>{
        await  dispatch(getAllProductsPage(page , 10))
        }
}

export default ViewSearchProductsHook;
