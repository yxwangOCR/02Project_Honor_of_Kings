import { useState, useEffect } from "react";
import Helmet from "../../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Counter from "../../components/Counter/Counter";
import ProductsList from "../../components/ProductsList/ProductsList";
import Showcase from "../../assets/data/showcase.js";
import { Link } from "react-router-dom";

const Home = () => {
  const [assassin, setAssassin] = useState([]);
  const [warrior, setWarrior] = useState([]);
  const [mage, setMage] = useState([]);
  const [marksman, setMarksman] = useState([]);
  const [support, setSupport] = useState([]);
  const [tank, setTank] = useState([]);

  useEffect(() => {
    const filteredAssassin = Showcase.filter(
      (item) => item.role === "Assassin"
    );

    const filteredMage = Showcase.filter((item) => item.role === "Mage");
    const filteredSupport = Showcase.filter((item) => item.role === "Support");
    const filteredMarksman = Showcase.filter(
      (item) => item.role === "Marksman"
    );
    const filteredTank = Showcase.filter((item) => item.role === "Tank");
    const filteredWarrior = Showcase.filter((item) => item.role === "Warrior");

    setAssassin(filteredAssassin);
    setMage(filteredMage);
    setMarksman(filteredMarksman);
    setSupport(filteredSupport);
    setTank(filteredTank);
    setWarrior(filteredWarrior);
  }, []);

  return (
    <Helmet title={"Accueil"}>
      <Hero />
      

      <section className="products">
        <Container>
          <Col lg="12">
            <h2 className="section__title">WARRIOR</h2>
          </Col>
          <Row className="products_card-container">
            <ProductsList data={warrior} />
          </Row>
          <Col lg="12" className="button__row">
            <button className="button">
              <Link to="/boutique">Voir plus</Link>
            </button>
          </Col>
        </Container>
      </section>

      <section className="products">
        <Container>
          <Col lg="12">
            <h2 className="section__title">TANK</h2>
          </Col>
          <Row className="products_card-container">
            <ProductsList data={tank} />
          </Row>
          <Col lg="12" className="button__row">
            <button className="button">
              <Link to="/boutique">Voir plus</Link>
            </button>
          </Col>
        </Container>
      </section>
      <Counter />
      <section className="products">
        <Container>
          <Col lg="12">
            <h2 className="section__title">ASSASSIN</h2>
          </Col>
          <Row className="products_card-container">
            <ProductsList data={assassin} />
          </Row>
          <Col lg="12" className="button__row">
            <button className="button">
              <Link to="/boutique">Voir plus</Link>
            </button>
          </Col>
        </Container>
      </section>
      <section className="products">
        <Container>
          <Col lg="12">
            <h2 className="section__title">MAGE</h2>
          </Col>
          <Row className="products_card-container">
            <ProductsList data={mage} />
          </Row>
          <Col lg="12" className="button__row">
            <button className="button">
              <Link to="/boutique">Voir plus</Link>
            </button>
          </Col>
        </Container>
      </section>

      <section className="products">
        <Container>
          <Col lg="12">
            <h2 className="section__title">MARKSMAN</h2>
          </Col>
          <Row className="products_card-container">
            <ProductsList data={marksman} />
          </Row>
          <Col lg="12" className="button__row">
            <button className="button">
              <Link to="/boutique">Voir plus</Link>
            </button>
          </Col>
        </Container>
      </section>
      <section className="products">
        <Container>
          <Col lg="12">
            <h2 className="section__title">SUPPORT</h2>
          </Col>
          <Row className="products_card-container">
            <ProductsList data={support} />
          </Row>
          <Col lg="12" className="button__row">
            <button className="button">
              <Link to="/boutique">Voir plus</Link>
            </button>
          </Col>
        </Container>
      </section>
      <Services />
    </Helmet>
  );
};

export default Home;
