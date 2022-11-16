import "./Cart.css";
import Helmet from "../../components/Helmet/Helmet";
import PageHead from "../../components/PageHead/PageHead";
import { Container, Row, Col } from "reactstrap";
import CartTable from "../../components/CartTable/CartTable";
import CartCheckoutButtons from "../../components/CartCheckoutButtons/CartCheckoutButtons";

const Cart = () => {
  return (
    <Helmet title={"Panier"}>
      <PageHead title="Panier" />
      <section className="cart">
        <Container>
          <Row>
            <Col lg="12">
              <CartTable />
            </Col>
            <Col lg="3">
              <CartCheckoutButtons />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
