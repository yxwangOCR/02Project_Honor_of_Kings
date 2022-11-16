import "./Slider.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../assets/data/images.js";

const Slider = () => {
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    console.log(imageRef.current.scrollWidth, imageRef.current.offsetWidth);
    setImageWidth(imageRef.current.scrollWidth - imageRef.current.offsetWidth);
  }, []);

  return (
    <motion.div
      className='carousel'
      ref={imageRef}
      whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag='x'
        dragConstraints={{
          right: 0,
          left: -imageWidth,
        }}
        className='inner__carousel'>
        {images.map((image, index) => {
          return (
            <motion.div key={index} className='carousel__image'>
              <img src={image} alt='recommended-items' />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
