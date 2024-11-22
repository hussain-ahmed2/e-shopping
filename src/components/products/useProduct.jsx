import { useState } from "react"
import {products} from "../../data/data"

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
        const data =  [];
        for (let i=0; i<products.length; i++){
            if(products[i][filter] === value || value === 'all') {
                data.push(products[i]);
            }
        }
        return data;
    }

    function searchProduct(search) {
        const data = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].title.toLowerCase().includes(search.toLowerCase())) {
                data.push(products[i]);
            }
        }
        return data;
    }

    const [allProducts, setAllProducts] = useState(filterProduct('category', 'all'));
    const [categories, setCategories] = useState((filterProduct('category', 'all')).reduce((acc, curr) => {
        if (!acc.includes(curr.category)) acc.push(curr.category);
        return acc;
    }, []));
    const [currProducts, setCurrProducts] = useState(limitProduct(limit, page, filterProduct('category', 'all')));
    
  return {currProducts, setCurrProducts, limit, setLimit, page, setPage, products, limitProduct, filterProduct, allProducts, setAllProducts, categories, setCategories, searchProduct}
}
export default useProduct