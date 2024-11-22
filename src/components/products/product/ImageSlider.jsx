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
      <div className="border relative h-96 flex max-w-96 mx-auto">
        {images.map((image, index) => (
          <div key={`${title + index}`} className="absolute h-full top-0 left-0 w-full p-3">
            <img
              className={`w-full max-w-96 mx-auto h-full object-contain transition-all duration-500 ease-in ${currIndex === index ? 'w-full':'w-0 opacity-0'}`}
              src={image}
              alt={title}
            />
          </div>
        ))}
      </div>
    );
}

ImageSlider.propTypes = {
    images: proptypes.array.isRequired,
    title: proptypes.string.isRequired
}