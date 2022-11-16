import { ListGroup, ListGroupItem } from "reactstrap";

const Contact = () => {
  return (
    <div className="footer__quick-links">
      <h4 className="quick__links-title">Contact</h4>
      <ListGroup className="footer__contact">
        <ListGroupItem>
          <span>
            <i className="ri-map-pin-fill"></i>
          </span>
          <p>9821 108 St, Fort Saskatchewan, T8L 2J2, Canada</p>
        </ListGroupItem>
        <ListGroupItem>
          <span>
            <i className="ri-phone-fill"></i>
          </span>
          <p>(780) 998-1411</p>
        </ListGroupItem>
        <ListGroupItem>
          <span>
            <i className="ri-mail-fill"></i>
          </span>
          <p>lamaisonjungle@contact.ca</p>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Contact;
