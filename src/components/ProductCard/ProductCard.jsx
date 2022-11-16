import React from "react";
import { motion } from "framer-motion";
import "./ProductCard.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import { likeActions } from "../../redux/likeSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Ce produit est ajouté à votre panier!");
  };

  const addToLike = () => {
    dispatch(
      likeActions.addLike({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("Ce produit est ajouté à votre liste de souhaits!");
  };

  return (
    <Col lg='3'>
      <div className='product__item'>
        <div className='product__img'>
          <Link to={`/boutique/${item.id}`}>
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
          </Link>
        </div>
        <div className='product__info'>
          <h4 className='product__name'>
            <Link to={`/boutique/${item.id}`}>{item.productName}</Link>
          </h4>
          <span>{item.role}, </span>
          <span>{item.lane}</span>
        </div>
        <div className='product__card-bottom'>
          <span className='price'>{item.price}€</span>
          <span className='product__icons'>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToLike}>
              <i className='ri-heart-3-fill'></i>
            </motion.span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
              <i className='ri-add-line'></i>
            </motion.span>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
