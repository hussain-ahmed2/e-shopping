import { Link } from "react-router-dom";
import StarRating from "../StarRating";
import proptypes from 'prop-types';

const AllProducts = ({products}) => {
  
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
      {products.map((product) => {
        const { id, title, rating, price, thumbnail } = product;

        return (
          <Link to={`/products/${id}`} className="flex flex-col shadow rounded p-3" key={id}>
            <img
              className="mx-auto max-w-44"
              src={thumbnail}
              alt={`${title} image`}
            />
            <div className="">
              <h2> ${price} </h2>
              <h3>{title}</h3>
              <StarRating starCount={rating} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default AllProducts;

AllProducts.propTypes = {
    products: proptypes.array.isRequired
}