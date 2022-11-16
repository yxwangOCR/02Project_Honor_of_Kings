import Helmet from "../../components/Helmet/Helmet";
import PageHead from "../../components/PageHead/PageHead";
import LikeTable from "../../components/LikeTable/LikeTable";
import Slider from "../../components/Slider/Slider";
import { Container, Row, Col } from "reactstrap";
import "./Wishlist.css";

const Wishlist = () => {
  return (
    <Helmet title='Favori'>
      <PageHead title='Favori' />
      <section className='like'>
        <Container>
          <Row>
            <Col lg='12'>
              <LikeTable />
            </Col>
          </Row>
          <Row>
            <Col lg='12' className='related__products'>
              <h3>Vous pourriez aimer ces produits...</h3>
              <Slider />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Wishlist;
