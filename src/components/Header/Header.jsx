import "./Header.css";
import { useRef, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Logo from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import NavIcon from "../NavIcon/NavIcon.jsx";

function Header() {
  const headerRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeader();
    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  });
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <Logo />
            <NavMenu />
            <NavIcon />
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
