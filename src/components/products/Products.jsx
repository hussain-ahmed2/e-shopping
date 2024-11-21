import AllProducts from "./AllProducts";
import useProduct from "./useProduct";
import { useEffect } from "react";

function Products() {
  const {
    limit,
    products,
    page,
    setPage,
    limitProduct,
    setAllProducts,
    allProducts,
  } = useProduct();
  function handleClick(index) {
    setPage(index);
  }

  useEffect(() => {
    setAllProducts(limitProduct(limit, page));
  }, [page]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-150px)] justify-between ">
      <h1 className="text-center text-3xl font-bold">All Products</h1>
      <AllProducts products={allProducts} />
      <div className="flex items-center justify-center gap-4 py-3">
        <button
          disabled={page == 0}
          className={`border h-10 w-10 ${page == 0 && "cursor-not-allowed"} `}
          onClick={() => handleClick(page - 1)}
        >
          prev
        </button>
        {new Array(Math.ceil(products.length / limit))
          .fill(0)
          .map((_, index) => (
            <button
              disabled={index == page}
              className={`border h-10 w-10 ${
                index == page && "cursor-not-allowed bg-green-100"
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </button>
          ))}
        <button
          disabled={page == Math.ceil(products.length / limit) - 1}
          className={`border h-10 w-10 ${
            page == Math.ceil(products.length / limit) - 1 &&
            "cursor-not-allowed"
          } `}
          onClick={() => handleClick(page + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
}
export default Products;
