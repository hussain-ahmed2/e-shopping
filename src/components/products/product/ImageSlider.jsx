import proptypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../user/UserConext";

export default function ImageSlider({ images, title }) {
  const [currIndex, setCurrIndex] = useState(0);

  const { display } = useContext(UserContext);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [images.length]);

  return (
    <div
      className={`border-2 rounded-md relative h-[350px] md:h-[500px] flex max-w-[300px] md:max-w-[450px] mx-auto w-full overflow-hidden ${
        !display && "-z-10"
      }`}
      aria-label={`Image slider for ${title}`}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={`${title}-${index}`}
            className="h-[350px] md:h-[500px] w-full flex-shrink-0 flex justify-center items-center p-3"
          >
            <img
              className="max-w-full max-h-full object-contain"
              src={image}
              alt={`Slide ${index + 1} of ${title}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-1 right-1 w-full text-black text-2xl font-semibold flex h-10 justify-end gap-[2px]">
        {images.map((image, index) => (
          <img
            className={`object-contain h-full w-10 border-2 rounded cursor-pointer ${
              currIndex === index ? "border-emerald-500" : "bg-white"
            }`}
            key={`thumb-${index}`}
            src={image}
            alt={`Thumbnail for slide ${index + 1}`}
            onClick={() => setCurrIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: proptypes.arrayOf(proptypes.string).isRequired,
  title: proptypes.string.isRequired,
};
