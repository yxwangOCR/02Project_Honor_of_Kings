import "./Counter.css";
import { Container, Row, Col } from "reactstrap";
import CounterImg from "../../assets/images/hero-image.png";
import Clock from "../../components/Clock/Clock";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Counter = () => {
  return (
    <section className="timer__count">
      <Container>
        <Row>
          <Col>
            <div>
              <h4>Offres Limitées</h4>
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
            </div>
            <Clock />
            <motion.button whileTap={{ scale: 1.1 }} className="button">
              <Link to="/boutique">Visiter la Boutique</Link>
            </motion.button>
          </Col>
          <img src={CounterImg} alt="time-counter-decoration" />
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
