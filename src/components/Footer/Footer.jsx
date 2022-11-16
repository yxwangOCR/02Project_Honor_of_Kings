import "./Footer.css";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../assets/images/user-icon.png";
import Contact from "../Contact/Contact.jsx";
import UsefulLinks from "../UsefulLinks/UsefulLinks";
import QuickLinks from "../QuickLinks/QuickLinks";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="12">
            <div className="footer__logo">
              <img src={Logo} alt="footer-logo" />
              <h1>Honor of Kings</h1>
            </div>
            <p className="footer__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed
              sit delectus, error provident amet ea eveniet consectetur
              molestias minima obcaecati quos possimus beatae, officiis nostrum
              autem eum doloremque totam?
            </p>
          </Col>
          <Col lg="4">
            <QuickLinks />
          </Col>
          <Col lg="4">
            <UsefulLinks />
          </Col>
          <Col lg="4">
            <Contact />
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} @ La Maison Jungle
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
