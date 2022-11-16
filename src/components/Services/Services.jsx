import "./Services.css";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import serviceData from "../../assets/data/serviceData";

const Services = () => {
  return (
    <section>
      <Container>
        <Row className="service">
          {serviceData.map((item, index) => (
            <Col className="service__card" lg="3" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
