import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getOneProduct , getProductLike } from "../../Redux/Actions/ProductsAction";
import mobile from '../../images/mobile.png'
import { getOneCategory  } from "../../Redux/Actions/CategoryAction";
import { getOneBrand } from "../../Redux/Actions/BrandAction";

const ViewProductDetailsHook = (prodID  ) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneProduct(prodID));
        // if(item)
        // dispatch(getOneCategory(item.category));
       
        
    }, [])
 
    const oneProducts = useSelector((state)=>state.allproducts.oneProduct)
    const oneCategory = useSelector((state)=>state.allCategory.oneCategory)
    // const oneBrand = useSelector((state)=>state.allBrand.oneBrand)
    const productLike = useSelector((state)=>state.allproducts.productLike)

    // to show products item
    let item =[];
    if(oneProducts.data)
    item=oneProducts.data;
    else
    item = []

    useEffect(() => {
        if(item.category)
        dispatch(getOneCategory(item.category));
        if(item.brand)
        dispatch(getOneBrand(item.brand));

        if(item.category)
            dispatch(getProductLike(item.category));


    }, [item])
    // --------------



    // to view imgs gallary
    let images =[]
    if(item.images)
     images =   item.images.map((img)=> {return{original:img}})
    else{
     images = [{ original: `${mobile}`}]
    }

    // to show category item
    let cat =[];
    if(oneCategory.data)
    cat=oneCategory.data;
    else
    cat = []

    
    // // to show brand item
    // let brand =[];
    // if(oneBrand.data)
    // cat=oneBrand.data;
    // else
    // brand = []

    let prod = []
    if(productLike)
    prod  = productLike.data;
    else
    prod = []
 

    

    return [item , images , cat , prod]
}

export default ViewProductDetailsHook;
