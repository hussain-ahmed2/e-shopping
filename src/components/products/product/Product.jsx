import { useParams } from "react-router-dom";
import { products } from "../../../data/data";
import StarRating from "../StarRating";
import ImageSlider from "./ImageSlider";
import { useContext } from "react";
import UserContext from "../../user/UserConext";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Product = () => {
  const { productId } = useParams();
  const product = products.filter((el) => el.id == productId);
  const {handleCart, handleQuantityIncrement, handleQuantityDecrement, cart} = useContext(UserContext);

  return (
    <div>
      {product.map((el) => (
        <div key={el.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageSlider images={el.images} title={el.title} />
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">{el.title}</h1>
            <h2 className="text-2xl font-semibold">Price: ${el.price} </h2>
            <div className="flex items-center gap-2">
              Rating: <StarRating starCount={el.rating} />
            </div>
            <p> Product description: {el.description} </p>
            <div className="flex items-center gap-3">Quantity: 
              <div className="flex items-center gap-0">
                <button className="border grid place-content-center h-8 w-8 hover:bg-rose-200 transition-all duration-300 " disabled={cart.find((p) => p.id === el.id)?.quantity <= 1} onClick={() => handleQuantityDecrement(el.id)}>
                  <FaMinus />
                </button>
                <span className="border gird place-content-center h-8 w-8 text-center">{cart.find((p) => p.id === el.id)?.quantity || 0}</span>
                <button className="border grid place-content-center h-8 w-8 hover:bg-green-200 transition-all duration-300 " onClick={() => handleQuantityIncrement(el.id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-md" onClick={() => handleCart(el)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;
