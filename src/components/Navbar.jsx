import Logo from "../assets/willbnb.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar container">
        {" "}
        <img src={Logo} alt="logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
