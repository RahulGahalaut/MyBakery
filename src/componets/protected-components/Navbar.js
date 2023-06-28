import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className="nav-brand">MyBakery</h1>
        <div className="nav-link">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
