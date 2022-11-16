import Products from "../../assets/data/products.js";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import "./ProductPresentation.css";

const ProductPresentation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = Products.find((item) => item.id === id);
  const { productName, price, role, lane, shortDesc, description, avgRating } =
    product;
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      })
    );
    toast.success("1 item added to your cart");
  };

  const stars = Array(5).fill(0);
  const starColor = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };

  return (
    <div className='product__details'>
      <h2 className='product__name'>{productName}</h2>
      <div className='product__rating'>
        <div>
          {stars.map((_, index) => (
            <FaStar
              key={index}
              color={avgRating >= index ? starColor.red : starColor.grey}
            />
          ))}
        </div>
      </div>
      <p className='product__role'>
        {role}, {lane}
      </p>
      <span className='product__price'>{price} €</span>
      <p className='product__short-desc'>{shortDesc}</p>
      <p className='product__description'>{description}</p>
      <motion.button
        whileTap={{ scale: 1.1 }}
        className='button'
        onClick={addToCart}>
        Ajouter à mon panier
      </motion.button>
    </div>
  );
};

export default ProductPresentation;
