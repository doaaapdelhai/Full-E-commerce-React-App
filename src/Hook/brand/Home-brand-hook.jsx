import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrand } from "../../Redux/Actions/BrandAction";

const HomeBrandHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllBrand());
    }, [])
    // get last brand state from redux
    const brand = useSelector(state =>state.allBrand.brand )
        // get loading brand state from redux

    const loading = useSelector(state =>state.allBrand.loading )
    
    return [brand ,loading  ]
}


export default HomeBrandHook;