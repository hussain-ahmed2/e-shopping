import { useContext } from "react";
import UserContext from "../user/UserConext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-5">Cart</h1>
      <table className="w-full">
        <thead>
          <tr className="text-[10px] sm:text-sm">
            <th className="md:text-2xl font-semibold pb-2">Product</th>
            <th className="md:text-2xl font-semibold pb-2">Price</th>
            <th className="md:text-2xl font-semibold pb-2">Quantity</th>
            <th className="md:text-2xl font-semibold pb-2">Total</th>
            <th className="md:text-2xl font-semibold pb-2">Remove</th>
          </tr>
        </thead>

        <tbody className="text-[10px] sm:text-sm md:text-base border-b">
          {cart.map((el) => (
            <CartProduct key={el.id} product={el} />
          ))}
        </tbody>

        {cart.length > 0 ? (
          <tfoot>
            <tr className="text-sm md:text-base font-semibold">
              <td className="md:text-2xl font-semibold pb-2"></td>
              <td className="md:text-2xl font-semibold pb-2"></td>
              <td className="md:text-2xl font-semibold pb-2">Total</td>
              <td className="md:text-2xl font-semibold pb-2 text-center">
                $
                {cart
                  .reduce((acc, el) => acc + el.price * el.quantity, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        ) : (
          <tfoot>
            <tr>
              <td
                className="md:text-2xl font-semibold pb-2 text-center"
                colSpan={5}
              >
                Cart is empty
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};
export default Cart;
