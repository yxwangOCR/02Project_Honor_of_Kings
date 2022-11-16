import { Container } from "reactstrap";
import "./PageHead.css";

const PageHead = ({ title }) => {
  return (
    <section className="page__head">
      <Container>
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default PageHead;
