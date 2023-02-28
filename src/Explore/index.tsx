import Navbar from "../common/components/Navbar";
import PageHero from "./components/PageHero";
import bookCover from "./assets/book-cover.png";
import "./styles/bookGrid.css";

function Explore() {
  return (
    <div>
      <Navbar />
      <PageHero />
      <div className="booklist-section">
        <ol className="booklist-wrapper">
          <li>
            <img src={bookCover} alt="" />
            <div className="action-bar">
              <div className="action-status">Want to Read</div>
              <button className="action-dropdown">^</button>
            </div>
          </li>
          <li>
            <img src={bookCover} alt="" />
          </li>
          <li>
            <img src={bookCover} alt="" />
          </li>
          <li>
            <img src={bookCover} alt="" />
          </li>
          <li>
            <img src={bookCover} alt="" />
          </li>
          <li>
            <img src={bookCover} alt="" />
          </li>
          <li>
            <img src={bookCover} alt="" />
          </li>
          <li>
            <img src={bookCover} alt="" />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Explore;
