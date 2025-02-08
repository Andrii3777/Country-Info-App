import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <h1>Country Info App</h1>
      </Link>
    </header>
  );
};

export default Header;
