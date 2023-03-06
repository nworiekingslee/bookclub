import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
import { BookType } from "../../common/Types/Book.type";
// import bookCover from "../assets/book-cover.png";

type BookItemProps = {
  book: BookType;
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
        <img
          src={book?.image}
          alt=""
          className={`${book.status ? "border" : ""}`}
          style={{
            borderColor:
              book.status === "completed"
                ? "#01625D"
                : book.status === "reading"
                ? "#382110"
                : book.status === "to-read"
                ? "#14181F"
                : "Want to read"
                ? "#000"
                : "",
          }}
        />
      </li>
      <BookActionBar type="no-top" status={book.status} />
    </div>
  );
}

export default BookItem;
