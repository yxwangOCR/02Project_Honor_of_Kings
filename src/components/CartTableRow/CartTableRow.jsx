import { motion } from "framer-motion";
import { cartActions } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartTableRow = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="added-item" />
      </td>
      <td>{item.id}</td>
      <td>{item.productName}</td>
      <td>{item.price} €</td>
      <td>{item.quantity} px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.1 }}
          className="ri-delete-bin-5-line"
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  );
};

export default CartTableRow;
