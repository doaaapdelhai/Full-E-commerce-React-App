import { GET_ALL_CATEGORY , GET_ERROR} from '../Type'; 

const initialState = {
  category: [],
  loading: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false, // Changed semicolon to comma
      }
      case GET_ERROR : return {
        loading:true  , 
        category:action.payload,
      }
    default:
      return state;
  }
};

export default categoryReducer;
