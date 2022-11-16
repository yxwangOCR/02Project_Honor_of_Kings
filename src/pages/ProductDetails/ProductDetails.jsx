import "./ProductDetails.css";
import { useEffect } from "react";
import Helmet from "../../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Products from "../../assets/data/products.js";
import PageHead from "../../components/PageHead/PageHead";
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import Tab from "../../components/Tab/Tab";

const ProductDetails = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.id === id);
  const { imgUrl, productName, role } = product;
  const relatedProducts = Products.filter((item) => item.role === role);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <PageHead title={"Fiche produit de " + productName} />
      <section>
        <Container className="product__details__container">
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} />
            </Col>
            <Col lg="6">
              <ProductPresentation />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Tab />
            </Col>
            <Col lg="12" className="related__products">
              <h3>Vous pourriez aussi aimer ces produits...</h3>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
