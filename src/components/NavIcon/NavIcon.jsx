import "./NavIcon.css";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Profile from "../Profile/Profile.jsx";
import useToggle from "../../custom-hooks/useToggle";

const NavIcon = () => {
  const navigate = useNavigate();
  const navigateToCart = () => navigate("/panier");
  const navigateToWishlist = () => navigate("/favori");
  const totalQuantityCart = useSelector((state) => state.cart.totalQuantity);
  const totalQuantityLike = useSelector((state) => state.like.totalQuantity);
  const [toggle, setToggle] = useToggle(false);

  return (
    <div className="nav__icons">
      <motion.span
        whileTap={{ scale: 1.1 }}
        className="fav__icon"
        onClick={navigateToWishlist}
      >
        <i className="ri-heart-line"></i>
        <span className="badge">{totalQuantityLike}</span>
      </motion.span>
      <motion.span
        whileTap={{ scale: 1.1 }}
        className="cart__icon"
        onClick={navigateToCart}
      >
        <i className="ri-shopping-cart-fill"></i>
        <span className="badge">{totalQuantityCart}</span>
      </motion.span>
      <div className="mobile__menu">
        <i className="ri-menu-line" onClick={setToggle}></i>
        {toggle && (
          <div className="mobile__menu__link">
            <Link to="/accueil">Accueil</Link>
            <Link to="/boutique">Boutique</Link>
            <Link to="/panier">Panier</Link>
          </div>
        )}
      </div>
      <Profile />
    </div>
  );
};

export default NavIcon;
