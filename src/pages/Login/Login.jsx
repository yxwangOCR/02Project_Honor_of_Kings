import "./Login.css";
import Helmet from "../../components/Helmet/Helmet.js";
import PageHead from "../../components/PageHead/PageHead.jsx";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const [loading] = useState(false);

  return (
    <Helmet title="Login">
      <PageHead title={"Login"} />
      <section className="login__container">
        <Container>
          <Row>
            {loading ? (
              <Col>
                <h6 lg="12">Loading ... </h6>
              </Col>
            ) : (
              <Col lg="12" className="form">
                <LoginForm />
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
