import "../styles/Navbar.css";
import Button from "./Button";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      {/* <img src={} alt="logo" /> */}
      <ul>
        <p onClick={() => navigate("/")}>LOGO</p>
        <li onClick={() => navigate("/explore")}>Explore</li>
        <li onClick={() => navigate("/shelf")}>Myshelf</li>
        <li>About App</li>
      </ul>

      <Button />
    </div>
  );
}

export default Navbar;
