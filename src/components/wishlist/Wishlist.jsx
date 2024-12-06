import proptypes from 'prop-types'
import { useContext } from "react";
import UserContext from "../user/UserConext";
import { FaTrash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Wishlist({wishlist}) {

    const {handleWishlist, handleCart} = useContext(UserContext);

  return (
    <div className="flex flex-col  gap-1 p-1 cursor-default text-black">
      {wishlist.map((el) => (
        <div key={el.id} className="flex items-center justify-between text-[10px] md:text-base gap-1 max-w-96">
          <Link to={`/products/${el.id}`} className='flex items-center gap-1 w-[50%]'>
            <img
              className="w-10 h-10 object-contain"
              src={el.thumbnail}
              alt={el.title}
            />
            <h2>{el.title}</h2>
          </Link>
          <p className='w-[15%]'>${el.price}</p>
          <div className="flex gap-1">
            <button
              onClick={() => handleCart(el, 1)}
              className="bg-green-500 px-2 py-1 rounded-md text-[10px] md:text-sm"
            >
              Add to cart
            </button>
            <button onClick={() => handleWishlist(el)}>
              <FaTrash className="hover:text-rose-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Wishlist

Wishlist.propTypes = {
    wishlist: proptypes.array.isRequired,
}