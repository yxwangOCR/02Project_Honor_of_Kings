import { FaStar } from "react-icons/fa";
import { useState } from "react";

const RatingStars = () => {
  const stars = Array(5).fill(0);
  const starColor = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className='form__group stars' >
      {stars.map((_, index) => (
        <FaStar
          className='review__stars'
          key={index}
          color={
            hoverValue || currentValue >= index + 1
              ? starColor.red
              : starColor.grey
          }
          onClick={() => handleClick(index + 1)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default RatingStars;
