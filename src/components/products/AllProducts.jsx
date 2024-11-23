import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import proptypes from "prop-types";

const AllProducts = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => {
        const { id, title, rating, price, thumbnail } = product;

        return (
          <Link
            to={`/products/${id}`}
            className="flex flex-col shadow rounded p-3 hover:bg-slate-200 transition-colors duration-300"
            key={id}
            aria-label={`View details for ${title}`}
          >
            <img
              className="mx-auto max-w-full h-48 object-contain rounded-md"
              src={thumbnail}
              alt={`Thumbnail of ${title}`}
              loading="lazy"
            />
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-gray-700">${price}</h2>
              <h3 className="text-sm text-gray-600 truncate">{title}</h3>
              <StarRating starCount={rating} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

AllProducts.propTypes = {
  products: proptypes.arrayOf(
    proptypes.shape({
      id: proptypes.number.isRequired,
      title: proptypes.string.isRequired,
      rating: proptypes.number.isRequired,
      price: proptypes.number.isRequired,
      thumbnail: proptypes.string.isRequired,
    })
  ).isRequired,
};

export default AllProducts;
