import Navbar from "../common/components/Navbar";
import PageHero from "./components/PageHero";
import "./styles/bookGrid.css";
import BookItem from "./components/BookItem";
import { books } from "../common/books";

function Explore() {
  return (
    <div>
      <Navbar />
      <PageHero />
      <div className="booklist-section">
        <ol className="booklist-wrapper">
          {books.map((book) => (
            <BookItem book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Explore;
