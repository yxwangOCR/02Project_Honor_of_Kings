import { useState } from "react";
import "./Shop.css";
import Helmet from "../../components/Helmet/Helmet";
import PageHead from "../../components/PageHead/PageHead";
import { Container, Row, Col } from "reactstrap";
import Products from "../../assets/data/products.js";
import ProductsList from "../../components/ProductsList/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(Products);

  // Filter products by role
  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "Assassin") {
      const filteredProducts = Products.filter((product) => {
        return product.role === "Assassin";
      });
      setProductsData(filteredProducts);
    }
    if (value === "Mage") {
      const filteredProducts = Products.filter((product) => {
        return product.role === "Mage";
      });
      setProductsData(filteredProducts);
    }
    if (value === "Support") {
      const filteredProducts = Products.filter((product) => {
        return product.role === "Support";
      });
      setProductsData(filteredProducts);
    }
    if (value === "Marksman") {
      const filteredProducts = Products.filter((product) => {
        return product.role === "Marksman";
      });
      setProductsData(filteredProducts);
    }
    if (value === "Tank") {
      const filteredProducts = Products.filter((product) => {
        return product.role === "Tank";
      });
      setProductsData(filteredProducts);
    }
    if (value === "Warrior") {
      const filteredProducts = Products.filter((product) => {
        return product.role === "Warrior";
      });
      setProductsData(filteredProducts);
    }
  };

  //sort products by price
  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "ascending") {
      const sortedProducts = Products.sort((a, b) => {
        return a.price - b.price;
      });
      setProductsData(sortedProducts);
      console.log(sortedProducts);
    }
    if (value === "descending") {
      const sortedProducts = Products.sort((a, b) => {
        return b.price - a.price;
      });
      setProductsData(sortedProducts);
      console.log(sortedProducts);
    }
  };

  // Search products by name
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = Products.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Boutique">
      <PageHead title="Boutique" />
      <section>
        <Container>
          <Row className="filter-sort-search-wrapper">
            <Col lg="4" md="4">
              <select defaultValue={"DEFAULT"} onChange={handleFilter}>
                <option value="DEFAULT" disabled hidden>
                  Filtrer par Rôle
                </option>
                <option value="Assassin">Assassin</option>
                <option value="Mage">Mage</option>
                <option value="Support">Support</option>
                <option value="Marksman">Marksman</option>
                <option value="Tank">Tank</option>
                <option value="Warrior">Warrior</option>
              </select>
            </Col>
            <Col lg="4" md="4">
              <select defaultValue={"DEFAULT"} onChange={handleSort}>
                <option value="DEFAULT" disabled hidden>
                  Trier par
                </option>
                <option value="ascending">Prix croissant</option>
                <option value="descending">Prix décroissant</option>
              </select>
            </Col>
            <Col lg="4" md="4">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Rechercher"
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="products__wrapper">
            {productsData.length === 0 ? (
              <h1 className="text-center">Aucun produit n'est trouvé !</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
