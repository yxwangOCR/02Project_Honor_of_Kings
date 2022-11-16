import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const UsefulLinks = () => {
  return (
    <div className="footer__quick-links">
      <h4 className="quick__links-title">Liens utiles</h4>
      <ListGroup className="footer__useful-links">
        <ListGroupItem>
          <span>
            <i className="ri-store-3-fill"></i>
          </span>
          <Link to="/boutique">Notre boutique</Link>
        </ListGroupItem>
        <ListGroupItem>
          <span>
            <i className="ri-shopping-cart-fill"></i>
          </span>
          <Link to="/panier">Votre panier</Link>
        </ListGroupItem>
        <ListGroupItem>
          <span>
            <i className="ri-login-box-fill"></i>
          </span>
          <Link to="/login">Connexion</Link>
        </ListGroupItem>
        <ListGroupItem>
          <span>
            <i className="ri-file-user-fill"></i>
          </span>
          <Link to="/signup">Créer un compte</Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default UsefulLinks;
