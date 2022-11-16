import { useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../assets/data/products.js";
import ProductReview from "../../components/ProductReview/ProductReview";
import "./Tab.css"

const Tab = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.id === id);
  const { description, reviews } = product;
  const [tab, setTab] = useState("description");
  return (
    <>
      <div className="tab__wrapper">
        <h6
          className={`${tab === "description" ? "active__tab" : ""}`}
          onClick={() => setTab("description")}
        >
          Description
        </h6>
        <h6
          className={`${tab === "review" ? "active__tab" : ""}`}
          onClick={() => setTab("review")}
        >
          Reviews ({reviews.length})
        </h6>
      </div>
      {tab === "description" ? (
        <div className="tab__content">
          <p>{description}</p>
        </div>
      ) : (
        <ProductReview />
      )}
    </>
  );
};

export default Tab;
