import { GET_ALL_BRAND , GET_ERROR ,GET_ONE_BRAND , CREATE_BRAND} from '../Type'; 

const initialState = {
  brand: [],
  oneBrand:[],
  loading: true,
};

const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      }
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      }
      case CREATE_BRAND:
      return{
        brand: action.payload,
        loading: false,
      }
      case GET_ERROR : 
      return {
        loading:true  , 
        brand:action.payload,
      }
    default:
      return state;
  }
};

export default BrandReducer;
