import AllProducts from "./AllProducts";
import useProduct from "./useProduct";
import { useEffect } from "react";

function Products() {
  const {
    limit,
    allProducts,
    setAllProducts,
    page,
    setPage,
    limitProduct,
    setCurrProducts,
    currProducts,
    filterProduct,
    categories,
    searchProduct,
  } = useProduct();
  function handleClick(index) {
    window.scrollTo(0, 0);
    setPage(index);
  }

  function handleCategoryChange(e) {
    e.preventDefault();

    setAllProducts(filterProduct("category", e.target.value));
    setCurrProducts(
      limitProduct(limit, page, filterProduct("category", e.target.value))
    );
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    
    setAllProducts(searchProduct(e.target.search.value));
    setCurrProducts(
      limitProduct(limit, page, searchProduct(e.target.search.value))
    );
  }

  useEffect(() => {
    setCurrProducts(limitProduct(limit, page, allProducts));
  }, [page, allProducts, limit]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-150px)] justify-between ">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-center text-3xl font-bold">All Products</h1>
        <div className="flex items-center justify-center gap-4 flex-wrap pb-4">
          <div className="flex items-center gap-2 capitalize">
            filter by category
            <select
              onChange={handleCategoryChange}
              name="category"
              id="category"
              className="border p-1 rounded capitalize"
            >
              <option value="all" defaultValue={"all"}>
                all
              </option>
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2 capitalize">
              search by title
              <form method="POST" onSubmit={handleSearchSubmit}>
                <input type="text" name="search" id="search" className="border p-1 rounded" />
              </form>
          </div>
        </div>
      </div>
      <AllProducts products={currProducts} />
      <div className="flex items-center justify-center gap-4 py-3">
        <button
          disabled={page == 0}
          className={`border h-10 w-10 ${
            page == 0 && "cursor-not-allowed hidden"
          } `}
          onClick={() => handleClick(page - 1)}
        >
          prev
        </button>
        {new Array(Math.ceil(allProducts.length / limit))
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
          disabled={page == Math.ceil(allProducts.length / limit) - 1}
          className={`border h-10 w-10 ${
            page == Math.ceil(allProducts.length / limit) - 1 &&
            "cursor-not-allowed hidden"
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
