import Navbar from "../common/components/Navbar";
import PageHero from "./components/PageHero";
import "./styles/bookGrid.css";
import BookItem from "./components/BookItem";

function Explore() {
  return (
    <div>
      <Navbar />
      <PageHero />
      <div className="booklist-section">
        <ol className="booklist-wrapper">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </ol>
      </div>
    </div>
  );
}

export default Explore;
