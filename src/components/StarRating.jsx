import { FaStar } from "react-icons/fa";
import proptypes from 'prop-types';

const StarRating = ({starCount}) => {
  return <div className="flex">
    {
        new Array(5).fill(0).map((_,index) => <FaStar className={index+1 <= Math.round(starCount)  && "text-yellow-500"} key={index} />)
    }
  </div>;
};
export default StarRating;

StarRating.propTypes = {
    starCount: proptypes.number.isRequired
}