import proptypes from "prop-types";
import { useContext } from "react";
import UserContext from "../user/UserConext";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartProduct({ product }) {
    const { handleQuantityIncrement, handleQuantityDecrement, handleCartRemove } = useContext(UserContext);
  return (
    <tr className="text-center border-t">
      <td>
        <Link
          to={`/products/${product.id}`}
          className="flex items-center gap-3 text-blue-500 hover:text-green-500"
        >
          <img
            className="md:w-20 w-12 md:h-20 h-12"
            src={product.thumbnail}
            alt={product.title}
          />
          <h3>{product.title}</h3>
        </Link>
      </td>
      <td>${product.price}</td>
      <td>
        <div className="flex items-center gap-1 justify-center">
          <button
            className={`hover:text-emerald-500 px-2 py-1 rounded-md `}
            onClick={() => handleQuantityIncrement(product.id)}
          >
            <FaPlus />
          </button>
          {product.quantity}
          <button
            disabled={product.quantity <= 1}
            className={`hover:text-rose-500 px-2 py-1 rounded-md ${
              product.quantity <= 1 && "opacity-50"
            }`}
            onClick={() => handleQuantityDecrement(product.id)}
          >
            <FaMinus />
          </button>
        </div>
      </td>
      <td>${product.price * product.quantity}</td>
      <td>
        <button
          className="hover:text-rose-500 px-2 py-1 rounded-md"
          onClick={() => handleCartRemove(product.id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
export default CartProduct;

CartProduct.propTypes = {
  product: proptypes.object.isRequired,
};
