import "./Signup.css";
import Helmet from "../../components/Helmet/Helmet.js";
import PageHead from "../../components/PageHead/PageHead.jsx";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";

function Signup() {
  const [loading] = useState(false);
  return (
    <Helmet title="S'inscrire">
      <PageHead title={"Créer un nouveau compte"} />
      <section className="signup__container">
        <Container>
          <Row>
            {loading ? (
              <Col lg="12">
                <h6>Loading</h6>
              </Col>
            ) : (
              <Col lg="12" className="form">
                <SignupForm />
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Signup;
