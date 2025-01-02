// import Reac   t from 'react';

import BrandContainer from "../../Brand/BrandContainer";
import PaginationCompontent from "../../Uitily/Pagination";
import AllBrandHook from './../../../Hook/brand/All-brand-page-hook';

const AllBrandPage = () => {
  const [brand ,loading ,pageCount , getPage  ] = AllBrandHook();

  return (
    <div style={{ minHeight: "670px" }}>
    <BrandContainer data = {brand.data} loading={loading} />
    <PaginationCompontent pageCount = {pageCount}  onPress={getPage} />
  </div>
  );
}

export default AllBrandPage;
