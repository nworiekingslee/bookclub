import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
import { BookType } from "../../common/Types/Book.type";
// import bookCover from "../assets/book-cover.png";

type BookItemProps = {
  book?: BookType;
};

function BookItem({ book }: BookItemProps) {
  return (
    <div className="wrapper">
      <li className="book-item">
        <div className="book-hover-overlay">
          <div className="overlay-content">
            <p>Rate this book</p>
            <div className="star-wrap">
              <Rate />
            </div>
          </div>
        </div>
        <img src={book?.image} alt="" />
      </li>
      <BookActionBar />
    </div>
  );
}

export default BookItem;
