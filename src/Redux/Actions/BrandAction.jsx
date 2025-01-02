import {CREATE_BRAND, GET_ALL_BRAND  , GET_ERROR, GET_ONE_BRAND} from '../Type';
// import baseUrl from '../../Api/BaseURL';
import useGetData from '../../Hooks/UseGetData';
import { useInsertDataWithImg } from '../../Hooks/UseInsertDate';

// get all Brand 
export const getAllBrand =(limit)=> async(dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/brands?limit=${limit}`)

        dispatch ({
            type:GET_ALL_BRAND,
            payload:response,
        })
    }catch(e){
        dispatch ( {
            type:GET_ERROR,
            payload:"Error"+ e,
        })
    }
}

// get one Brand 
export const getOneBrand =(id)=> async(dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/brands/${id}`)

        dispatch ({
            type:GET_ONE_BRAND,
            payload:response,
        })
    }catch(e){
        dispatch ( {
            type:GET_ERROR,
            payload:"Error"+ e,
        })
    }
}


// get all Brand with pagination
export const getAllBrandPage =(page)=> async(dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/brands?limit=4&page=${page}`)

        dispatch ({
            type:GET_ALL_BRAND,
            payload:response,
        })
    }catch(e){
        dispatch ( {
            type:GET_ERROR,
            payload:"Error"+ e,
        })
    }
}

// insert  createBrand
export const createBrand =(formData) => async(dispatch)=>{
    try{
        const response = await useInsertDataWithImg(`/api/v1/brands` , formData )
        dispatch({
            type: CREATE_BRAND,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}