import {GET_ALL_CATEGORY , GET_ERROR} from '../Type';
// import baseUrl from '../../Api/BaseURL';
import useGetData from '../../Hooks/UseGetData';
export const getAllCategory =()=> async(dispatch)=>{
    try{
        // const res = await baseUrl.get('/api/v1/categories');
        // console.log(res.data);
        const response = await useGetData()
        
        dispatch ({
            type:GET_ALL_CATEGORY,
            payload:response,
        })
    }catch(e){
        dispatch ( {
            type:GET_ERROR,
            payload:"Error"+ e,
        })
    }
}


