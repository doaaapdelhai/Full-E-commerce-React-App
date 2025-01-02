import {   GET_ERROR , UPDATE_PRODUCTS, CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_PRODUCTS_DETEILS, GET_PRODUCT_LIKE, DELETE_PRODUCTS} from '../Type'; 

const initialState = {
  products: [],
  allProducts:[],
  oneProduct:[],
  productLike:[],
  deleteProduct:[],
  updateProduct:[],
  loading: true,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }

      case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      }
      case GET_PRODUCTS_DETEILS:
      return {
        oneProduct: action.payload,
        loading: false,
      }


      case GET_PRODUCT_LIKE:
      return {
        ...state,
        productLike: action.payload,
        loading: false,
      }
      case DELETE_PRODUCTS:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      }
      case UPDATE_PRODUCTS:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      }

      case GET_ERROR : 
      return {
        loading:true  , 
        products:action.payload,
      }
    default:
      return state;
  }
};

export default productsReducer;
