import "../styles/Navbar.css";
import Button from "./Button";

function Navbar() {
  return (
    <div className="navbar">
      {/* <img src={} alt="logo" /> */}
      <ul>
        <li>LOGO</li>
        <li>Explore</li>
        <li>Myshelf</li>
        <li>About App</li>
      </ul>

      <Button />
    </div>
  );
}

export default Navbar;
