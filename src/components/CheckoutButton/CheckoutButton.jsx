import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const CheckoutButton = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="checkout__cart">
      <h6>
        Quantité totale : <span>{totalQuantity} item</span>
      </h6>
      <h6>
        Montant total : <span>{totalAmount} €</span>
      </h6>
      <motion.button whileTap={{ scale: 1.1 }} className="button">
        Passer la Commande
      </motion.button>
    </div>
  );
};

export default CheckoutButton;
