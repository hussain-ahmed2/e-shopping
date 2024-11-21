import { useParams } from "react-router-dom";
import { products } from "../../../data/data";
import StarRating from "../../StarRating";
import ImageSlider from "./ImageSlider";

const Product = () => {
  const { productId } = useParams();
  const product = products.filter(el => el.id == productId);
  
  return (
    <div>
      {product.map((el) => (
        <div key={el.id}>
          <ImageSlider images={el.images} title={el.title} />
          <div className="mx-auto max-w-screen-lg flex items-center flex-col mt-10 gap-5">
            <h2 className="text-2xl font-semibold"> ${el.price} </h2>
            <h1 className="text-3xl font-semibold">{el.title}</h1>
            <div className="scale-150">
              <StarRating starCount={el.rating} />
            </div>
            <p> Product description: {el.description} </p>
            <div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;
