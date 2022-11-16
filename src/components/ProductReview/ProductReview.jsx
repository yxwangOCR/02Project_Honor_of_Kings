import { useParams } from "react-router-dom";
import Products from "../../assets/data/products.js";
import ReviewForm from "../ReviewForm/ReviewForm.jsx";

const ProductReview = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.id === id);
  const { reviews } = product;

  return (
    <div className="tab__content">
      <div>
        <ul className="reviews">
          {reviews?.map((item, index) => (
            <li key={index}>
              <div className="review__item">
                <i className="ri-user-3-fill"></i>
                <span>Évaluation moyenne : {item.rating} </span>
              </div>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <ReviewForm />
      </div>
    </div>
  );
};

export default ProductReview;
