import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { likeActions } from "../../redux/likeSlice";
import { cartActions } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const LikeTableRow = ({ item }) => {
  const dispatch = useDispatch();
  const deleteLikedProduct = () => {
    dispatch(likeActions.deleteLike(item.id));
  };

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
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="added-item" />
      </td>
      <td>{item.id}</td>
      <td>{item.productName}</td>
      <td>{item.price} €</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.1 }}
          className="ri-delete-bin-5-line"
          onClick={deleteLikedProduct}
        ></motion.i>
      </td>
      <td>
        <button className="button mt-0" onClick={addToCart}>
          Ajuoter au panier
        </button>
      </td>
    </tr>
  );
};

export default LikeTableRow;
