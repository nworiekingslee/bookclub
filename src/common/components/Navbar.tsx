import "../styles/Navbar.css";
import Button from "./Button";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams({ page: "1" });

  function handleClick() {
    setSearchParams({ page: "2" });
  }

  useEffect(() => {
    // console.log(_);
  });

  return (
    <div className="navbar">
      {/* <img src={} alt="logo" /> */}
      <ul>
        <p onClick={() => navigate("/")}>LOGO</p>
        <li onClick={() => navigate("/explore")}>Explore</li>
        <li onClick={() => navigate("/shelf")}>Myshelf</li>
        <li>About App</li>
      </ul>

      <Button onClick={() => handleClick()} />
    </div>
  );
}

export default Navbar;
