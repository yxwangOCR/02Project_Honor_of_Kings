import { Container, Row, Col } from "reactstrap";
import "./Hero.css";
import BgVideo from "../../assets/bg.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const year = new Date().getFullYear();
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <p className="hero__subtitle">RENCONTREZ VOS HÉROS EN {year}</p>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea
                facere officia perspiciatis beatae doloribus magni aut labore
                recusandae quia totam.
              </p>
              <motion.button whileTap={{ scale: 1.1 }} className="button">
                <Link to="/boutique">Savoir plus</Link>
              </motion.button>
            </div>
          </Col>
          <Col lg="6" className="hero__video">
            <div>
              <video src={BgVideo} autoPlay loop muted></video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
