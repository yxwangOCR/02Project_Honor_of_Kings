import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="footer__quick-links">
      <h4 className="quick__links-title">Héros</h4>
      <ListGroup>
        <ListGroupItem>
          <Link to="#">Assassin</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="#">Mage</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="#">Marksman</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="#">Support</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="#">Tank</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="#">Warrior</Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default QuickLinks;
