import proptypes from 'prop-types'
import { useEffect, useState } from 'react';

export default function ImageSlider({images, title}) {
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
          setCurrIndex(((currIndex + 1) % images.length) || 0);
        }, 3000);

        return () => {
            clearInterval(id);
        }
    }, [currIndex, images.length]);
    
    return (
      <div className="border-2 rounded-md relative h-[500px] flex max-w-[450px] mx-auto w-full -z-10">
        {images.map((image, index) => (
          <div
            key={`${title + index}`}
            className="absolute h-[450px] top-0 left-0 w-full p-3"
          >
            <img
              className={`w-full max-w-[400px] mx-auto h-full object-contain transition-all duration-500 ease-in ${
                currIndex === index ? "w-full" : "w-0 opacity-0"
              }`}
              src={image}
              alt={title}
            />
          </div>
        ))}
        <div className="absolute bottom-1 right-1 w-full text-black text-2xl font-semibold flex h-10  justify-end gap-[2px]">
          {images.map((image, index) => {
            return (
              <img
                className={`object-contain h-full w-10 border-2 rounded cursor-pointer ${
                  currIndex === index ? "border-emerald-500" : "bg-white"
                }`}
                key={index}
                src={image}
                alt={title}
                onClick={() => setCurrIndex(index)}
              />
            );
          })}
        </div>
      </div>
    );
}

ImageSlider.propTypes = {
    images: proptypes.array.isRequired,
    title: proptypes.string.isRequired
}