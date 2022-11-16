import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartCheckoutButtons = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div>
      {cartItems.length === 0 ? null : (
        <div>
          <div className="amount__items">
            <h6>Montant Total:</h6>
            <span>{totalAmount} €</span>
          </div>
          <div className="amount__buttons">
            <button className="button">
              <Link to="/checkout">Checkout</Link>
            </button>
            <button className="button">
              <Link to="/boutique">Continuer les achats</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCheckoutButtons;
