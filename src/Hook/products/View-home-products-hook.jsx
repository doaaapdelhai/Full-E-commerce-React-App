import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/ProductsAction";




const ViewHomeProductsHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const allProducts = useSelector((state)=>state.allproducts.allProducts)
    // if(allProducts.data)
    // console.log(allProducts.data);

    let items =[];
    if(allProducts.data)
    items=allProducts.data.slice(0,4);
    else
    items = []
    return [items]

}

export default ViewHomeProductsHook;
