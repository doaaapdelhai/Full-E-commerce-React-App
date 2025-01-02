import HomePage from './page/Home/HomePage';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarLogin from './Components/Uitily/NavBarLogin';
import Footer from './Components/Uitily/Footer';
import LoginPage from './page/Auth/LoginPage';
import Register from './page/Auth/Register';
import AllCategoryPage from './page/Category/AllCategoryPage';
import AllBrandPage from './Components/Home/Brand/AllBrandPage';
import ShopProductsPage from './page/Products/ShopProductsPage';
import ProductDetalisPage from './page/Products/ProductDetalisPage';
import CartPage from './page/Cart/CartPage';
import ChoosePayMethoudPage from './page/Checkout/ChoosePayMethoudPage';
import AdminAllProductsPage from './page/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './page/Admin/AdminAllOrdersPage';
import AdminOrderDetalisPage from './page/Admin/AdminOrderDetalisPage';
import AdminAddBrandPage from './page/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './page/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './page/Admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './page/Admin/AdminAddProductsPage';
import UserAllOrdersPage from './page/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './page/User/UserFavoriteProductsPage';
import UserAllAddresPage from './page/User/UserAllAddresPage';
import UserAddAddressPage from './page/User/UserAddAddressPage';
import UserEditAddressPage from './page/User/UserEditAddressPage';
import UserProfilePage from './page/User/UserProfilePage';
import AdminEditeProductsPage from './page/Admin/AdminEditeProductsPage';

const App = () => {
  return (
    <div className='font'>
          <NavBarLogin/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/allcategor' element={<AllCategoryPage />} />
          <Route path='/allbrand' element={<AllBrandPage />} />
          <Route path='/products' element={<ShopProductsPage />} />
          <Route path='/products/:id' element={<ProductDetalisPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order/paymethoud' element={<ChoosePayMethoudPage />} />
          <Route path='/admin/allproducts' element={<AdminAllProductsPage />} />
          <Route path='/admin/allorders' element={<AdminAllOrdersPage />} />
          <Route path='/admin/orders/:id' element={<AdminOrderDetalisPage />} />
          <Route path='/admin/addbrand' element={<AdminAddBrandPage />} />
          <Route path='/admin/addcategory' element={<AdminAddCategoryPage />} />
          <Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage />} />
          <Route path='/admin/addproducts' element={<AdminAddProductsPage />} />
          <Route path='/user/allorders' element={<UserAllOrdersPage />} />
          <Route path='/user/favoriteproducts' element={<UserFavoriteProductsPage />} />
          <Route path='/user/addresses' element={<UserAllAddresPage />} />
          <Route path='/user/add-address' element={<UserAddAddressPage />} /> 
          <Route path='/user/edit-address' element={<UserEditAddressPage />} />
          <Route path='/user/profile' element={<UserProfilePage />} />
          <Route path='/admin/editeproduct/:id' element={<AdminEditeProductsPage />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


