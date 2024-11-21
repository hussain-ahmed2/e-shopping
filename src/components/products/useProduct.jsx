import { useEffect, useState } from "react"
import {products} from "../../data/data"

function useProduct() {
    const [page, setPage] = useState(sessionStorage.getItem("eshoppageno") || 0);
    const [limit, setLimit] = useState(32);
    function limitProduct(limit, page) {
        const data =  [];
        for (let i=(limit*page); i<(page*limit + limit); i++){
            if(products.length > i) {
                data.push(products[i]);
            }
        }
        return data;
    }
    const [allProducts, setAllProducts] = useState(limitProduct(limit, page));

    useEffect(() => {
        sessionStorage.setItem("eshoppageno", page);
    }, [page]);
    
  return {allProducts, setAllProducts, limit, setLimit, page, setPage, products, limitProduct}
}
export default useProduct