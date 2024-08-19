import { Helmet } from "react-helmet";

import MainLayout from "./components/layouts/MainLayout";
import Header from "./components/Header";
import PaginateItems from "./components/common/PaginateItems";
import { useGetProductsQuery } from "./slices/productApi";

const App = () => {
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery();
  return (
    <MainLayout>
      <Helmet>
        <title>فروشگاه استیکر برنامه نویسی</title>
      </Helmet>

      <div className="mx-auto max-w-6xl">
        <Header />
        <PaginateItems
          productsPerPage={4}
          products={products}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
    </MainLayout>
  );
};

export default App;
