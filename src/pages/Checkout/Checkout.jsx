import Helmet from "../../components/Helmet/Helmet";
import PageHead from "../../components/PageHead/PageHead";
import "./Checkout.css";
import { Container, Row, Col } from "reactstrap";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CheckoutButton from "../../components/CheckoutButton/CheckoutButton";

const CheckOut = () => {
  return (
    <Helmet title="Checkout">
      <PageHead title={"Checkout"} />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6>Information de votre facture</h6>
              <CheckoutForm />
            </Col>
            <Col lg="4">
              <CheckoutButton />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
