import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
import bookCover from "../assets/book-cover.png";

function BookItem() {
  return (
    <li className="book-item">
      <div className="book-hover-overlay">
        <div className="overlay-content">
          <p>Rate this book</p>
          <div className="star-wrap">
            <Rate />
          </div>
        </div>
      </div>
      <img src={bookCover} alt="" />
      <BookActionBar />
    </li>
  );
}

export default BookItem;
