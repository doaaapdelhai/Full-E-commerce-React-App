import useDeleteData from "../../Hooks/UseDeleteData";
import useGetData from "../../Hooks/UseGetData";
import {  useInsertDataWithImg } from "../../Hooks/UseInsertDate";
import { useUpateDataWithImg } from "../../Hooks/UseUpdateDate";
import { CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_ERROR, GET_PRODUCT_LIKE, GET_PRODUCTS_DETEILS ,DELETE_PRODUCTS, UPDATE_PRODUCTS } from "../Type";


// create product with pagination
export const createProduct = (formatData) => async (dispatch) => {
    try {
      const response = await useInsertDataWithImg(`/api/v1/products`, formatData);
      dispatch({
        type: CREATE_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };
  


  // get all product with pagination
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};



  // get all product with pagination with page number
  export const getAllProductsPage = (page , limit) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };


  // get one product with id
  export const getOneProduct = (id) => async (dispatch) => {
    try {
      const response = await useGetData(`/api/v1/products/${id}`);
      dispatch({
        type: GET_PRODUCTS_DETEILS,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
      });
    }
  };




    // get one product with id
    export const getProductLike = (id) => async (dispatch) => {
      try {
        const response = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
          type: GET_PRODUCT_LIKE,
          payload: response,
          loading: true,
        });
      } catch (e) {
        dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
        });
      }
    };


    
    // delete product with id
    export const deleteProducts = (id) => async (dispatch) => {
      try {
        const response = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
          type: DELETE_PRODUCTS,
          payload: response,
          loading: true,
        });
      } catch (e) {
        dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
        });
      }
    };



        // update product with id
        export const updateProducts = (id , data) => async (dispatch) => {
          try {
            const response = await useUpateDataWithImg(`/api/v1/products/${id}` , data);
            dispatch({
              type: UPDATE_PRODUCTS,
              payload: response,
              loading: true,
            });
          } catch (e) {
            dispatch({
              type: GET_ERROR,
              payload: "Error " + e,
            });
          }
        };