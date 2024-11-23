import AllProducts from "../products/AllProducts";
import useProduct from "../products/useProduct";


function Home() {

  const {topProducts, topReviewedProduct, topGroceries} = useProduct();

  return (
    <div className="">
      <div className="text-center py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to E-Shop</h2>
        <p className="text-lg mb-4">
          Your one-stop online store for the best deals on the latest products.
        </p>
        <p className="text-lg mb-8">
          Explore top-rated products, exciting new arrivals, and exclusive
          offers across all categories!
        </p>
      </div>
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
