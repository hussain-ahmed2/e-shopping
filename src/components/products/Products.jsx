import AllProducts from "./AllProducts";
import useProduct from "./useProduct";
import { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

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

  const [searchValue, setSearchValue] = useState("");

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
    handleClick(0);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();

    setAllProducts(searchProduct(searchValue));
    setCurrProducts(limitProduct(limit, page, searchProduct(searchValue)));

    handleClick(0);
  }

  function handleSearchInputChange(e) {
    setSearchValue(e.target.value);
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
            <label htmlFor="category">filter by category</label>
            <select
              onChange={handleCategoryChange}
              name="category"
              id="category"
              className="border p-1 rounded capitalize max-h-40 overflow-y-scroll"
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
          <div className="flex items-center gap-2 capitalize -z-10">
            <label htmlFor="search">search by title</label>
            <form
              method="POST"
              onSubmit={handleSearchSubmit}
              className="flex items-center justify-center relative"
            >
              <input
                type="text"
                name="search"
                id="search"
                className="border p-1 rounded text-base"
                onChange={handleSearchInputChange}
                value={searchValue}
              />
              <FaTimes
                onClick={() => setSearchValue("")}
                className={`cursor-pointer absolute right-10 text-base ${
                  searchValue == "" && "hidden"
                }`}
              />
              <button type="submit" className="border p-2 text-base rounded">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
      {currProducts.length > 0 ? (
        <AllProducts products={currProducts} />
      ) : (
        <h1 className="text-center text-3xl font-bold">No products found</h1>
      )}
      <div className="flex items-center justify-center gap-4 py-3 font-semibold">
        <button
          disabled={page == 0}
          className={`border h-10 w-10 capitalize ${
            (page == 0 || allProducts.length == 0) && "hidden"
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
          className={`border h-10 w-10 capitalize ${
            (page == Math.ceil(allProducts.length / limit) - 1 ||
              allProducts.length == 0) &&
            "hidden"
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
