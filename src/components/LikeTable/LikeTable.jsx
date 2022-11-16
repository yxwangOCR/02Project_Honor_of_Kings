import { useSelector } from "react-redux";
import LikeTableRow from "../LikeTableRow/LikeTableRow";
import "./LikeTable.css";

const CartTable = () => {
  const likedItems = useSelector((state) => state.like.likedItems);
  return (
    <div>
      {likedItems.length === 0 ? (
        <div className="empty">
          <h4>Votre favori est vide!</h4>
          <i className="ri-heart-2-fill"></i>
        </div>
      ) : (
        <table className="table bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Référence</th>
              <th>Titre</th>
              <th>Prix</th>
              <th>Supprimer</th>
              <th>Ajouter</th>
            </tr>
          </thead>
          <tbody>
            {likedItems.map((item, index) => (
              <LikeTableRow item={item} key={index} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartTable;
