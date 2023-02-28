import arrowUp from "../assets/arrow-up-light.svg";
import "../styles/BookActionBar.css";

function BookActionBar() {
  return (
    <div className="action-bar">
      <div className="action-status">Want to Read</div>
      <button className="action-dropdown">
        <img src={arrowUp} alt="" />
      </button>
    </div>
  );
}

export default BookActionBar;
