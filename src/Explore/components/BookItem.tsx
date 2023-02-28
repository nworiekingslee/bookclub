import BookActionBar from "../../common/components/BookActionBar";
import bookCover from "../assets/book-cover.png";
import starUnfilled from "../../common/assets/star-light-unfilled.svg";

function BookItem() {
  return (
    <li className="book-item">
      <div className="book-hover-overlay">
        <div className="overlay-content">
          <p>Rate this book</p>
          <div className="star-wrap">
            <div className="rating-component">
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
              <img src={starUnfilled} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src={bookCover} alt="" />
      <BookActionBar />
    </li>
  );
}

export default BookItem;
