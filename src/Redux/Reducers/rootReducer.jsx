import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import BrandReducer from './BrandReducer';
import subCategoryReducer from './SubCategoryReducer';
import productsReducer from './ProductsReducer';
export default combineReducers ({
  allCategory:CategoryReducer ,
  allBrand:BrandReducer ,
    subCategory:subCategoryReducer,
    allproducts:productsReducer

  
})