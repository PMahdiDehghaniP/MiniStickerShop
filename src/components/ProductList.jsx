
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const ProductList = ({ currentProducts, isLoading, isError, isSuccess }) => {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {isSuccess ? (
        <>
          {currentProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </>
      ) : isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner text="در حال بار گذاری ..." />
        </div>
      ) : (
        <p>مشکلی پیش آمده...</p>
      )}
    </div>
  );
};

export default ProductList;
