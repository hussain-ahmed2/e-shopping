import { useState } from "react";
import { products } from "../../data/data";

function useProduct() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(32);

  function limitProduct(limit, page, products) {
    const data = [];
    for (let i = 0; i < products.length; i++) {
      if (i >= page * limit && i < (page + 1) * limit) {
        data.push(products[i]);
      }
    }
    return data;
  }

  function filterProduct(filter, value) {
    const data = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i][filter] === value || value === "all") {
        data.push(products[i]);
      }
    }
    return data;
  }

  function searchProduct(search) {
    const data = [];
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].title.toLowerCase().includes(search.toLowerCase()) ||
        products[i].tags.toLowerCase().includes(search.toLowerCase())
      ) {
        data.push(products[i]);
      }
    }
    return data;
  }

  const [allProducts, setAllProducts] = useState(
    filterProduct("category", "all")
  );
  const [categories, setCategories] = useState(
    filterProduct("category", "all").reduce((acc, curr) => {
      if (!acc.includes(curr.category)) acc.push(curr.category);
      return acc;
    }, [])
  );

  const [currProducts, setCurrProducts] = useState(
    limitProduct(limit, page, filterProduct("category", "all"))
  );

  const [topProducts, setTopProducts] = useState(
    [...allProducts]
      .sort((a, b) => b.rating - a.rating)
      .filter((el, index) => index < 4)
  );
  const [topReviewedProduct, setTopReviewedProduct] = useState(
    [...allProducts]
      .sort((a, b) => b.reviews.length - a.reviews.length)
      .filter((el, index) => index < 4)
  );
  const [topGroceries, setTopGroceries] = useState(
    [...allProducts]
      .sort((a, b) => a.rating - b.rating)
      .filter(el=> el.category === "groceries").filter((_, index) => index < 4)
  );
  console.log(topGroceries);
  return {
    currProducts,
    setCurrProducts,
    limit,
    setLimit,
    page,
    setPage,
    products,
    limitProduct,
    filterProduct,
    allProducts,
    setAllProducts,
    categories,
    setCategories,
    searchProduct,
    topProducts,
    setTopProducts,
    topReviewedProduct,
    setTopReviewedProduct,
    topGroceries,
    setTopGroceries
  };
}
export default useProduct;
