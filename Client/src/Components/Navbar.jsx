import "../Styles/Style-Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="navbar">
      <Link to="/home">Home</Link>
      <Link to="/featured">Featured</Link>
      <Link to="/menu">Menu</Link>
    </div>
  );
};

export default NavBar;
