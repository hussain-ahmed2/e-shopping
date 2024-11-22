import { useParams } from "react-router-dom";
import { products } from "../../../data/data";
import StarRating from "../StarRating";
import ImageSlider from "./ImageSlider";

const Product = () => {
  const { productId } = useParams();
  const product = products.filter((el) => el.id == productId);

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
            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;
