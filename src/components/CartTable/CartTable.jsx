import { useSelector } from "react-redux";
import CartTableRow from "../CartTableRow/CartTableRow.jsx";

const CartTable = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="empty">
          <h4>Votre panier est vide!</h4>
          <i className="ri-shopping-cart-2-fill"></i>
        </div>
      ) : (
        <table className="table bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Reference</th>
              <th>Title</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <CartTableRow item={item} key={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartTable;
