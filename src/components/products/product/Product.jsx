import { useParams } from "react-router-dom";
import { products } from "../../../data/data";
import StarRating from "../StarRating";
import ImageSlider from "./ImageSlider";
import { useContext, useState } from "react";
import UserContext from "../../user/UserConext";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Product = () => {
  const { productId } = useParams();
  const product = products.filter((el) => el.id == productId);
  const { handleCart, cart, wishlist, handleWishlist } =
    useContext(UserContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      {product.map((el) => (
        <div key={el.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageSlider images={el.images} title={el.title} />
          <div className="flex flex-col gap-5">
            <h1 className="md:text-3xl text-xl font-semibold">{el.title}</h1>
            <h2 className="md:text-2xl text-lg font-semibold">
              Price: ${el.price}{" "}
            </h2>
            <div className="flex items-center gap-2">
              Rating: <StarRating starCount={el.rating} />
            </div>
            <p> Product description: {el.description} </p>
            <div className="flex items-center gap-3">
              Quantity:
              <div className="flex items-center gap-0">
                <button
                  className="border grid place-content-center h-8 w-8 hover:bg-rose-200 transition-all duration-300 "
                  disabled={cart.find((p) => p.id === el.id)?.quantity <= 1}
                  onClick={() => setQuantity(quantity - 1 || 1)}
                >
                  <FaMinus />
                </button>
                <span className="border gird place-content-center h-8 w-8 text-center">
                  {quantity}
                </span>
                <button
                  className="border grid place-content-center h-8 w-8 hover:bg-green-200 transition-all duration-300 "
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div>
              <button
                className={`text-white px-4 py-2 rounded-md ${
                  wishlist.find((p) => p.id === el.id)
                    ? "bg-rose-500"
                    : "bg-neutral-500"
                }`}
                onClick={() => handleWishlist(el)}
              >
                {wishlist.find((p) => p.id === el.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"}
              </button>
            </div>
            <div>
              <button
                className="bg-emerald-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleCart(el, quantity) & setQuantity(1)}
              >
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
