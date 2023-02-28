import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
import bookCover from "../../Explore/assets/book-cover.png";
import close from "../assets/close.svg";
import "../styles/ShelfBook.css";

function ShelfBook() {
  return (
    <div className="shelf-list-item">
      <div>
        <figure className="close">
          <img src={close} alt="" />
        </figure>
        <div className="shelf-book-wrap">
          <img src={bookCover} alt="" />
          <div className="shelf-book-desc">
            <div>
              <h3 className="title">Can’t Hurt Me</h3>
              <p className="author">David Goggins</p>
            </div>

            <div>
              <div className="review-wrap">
                <p>Your Review</p>
                <Rate variant="big" color="dark" />
              </div>
              <BookActionBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShelfBook;
