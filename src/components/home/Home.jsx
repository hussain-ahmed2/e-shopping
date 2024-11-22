import AllProducts from "../products/AllProducts";
import useProduct from "../products/useProduct";


function Home() {

  const {topProducts, topReviewedProduct, topGroceries} = useProduct();

  return (
    <div className="">
      <h2 className="text-center text-3xl font-semibold">Welcome to E-Shop</h2>
      <div>
        <p className="text-xl my-3">Our top products</p>
        <div>
          <AllProducts products={topProducts} />
        </div>
      </div>

      <div>
        <p className="text-xl my-3">Top reviewed product</p>
        <div>
          <AllProducts products={topReviewedProduct} />
        </div>
      </div>

      <div>
        <p className="text-xl my-3">Top Groceries</p>
        <div>
          <AllProducts products={topGroceries} />
        </div>
      </div>
    </div>
  );
}
export default Home;
