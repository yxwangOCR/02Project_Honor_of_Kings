import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const nav__links = [
  { path: "accueil", display: "Accueil" },
  { path: "boutique", display: "Boutique" },
  { path: "panier", display: "Panier" },
];

const NavMenu = () => {
  return (
    <div className="navigation">
      <ul className="menu">
        {nav__links.map((item, index) => (
          <li className="nav__item" key={index}>
            <NavLink
              to={item.path}
              className={(navClass) => (navClass.isActive ? "nav__active" : "")}
            >
              {item.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
