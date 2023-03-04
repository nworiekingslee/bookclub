import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
import { BookType } from "../../common/Types/Book.type";
import close from "../assets/close.svg";
import "../styles/ShelfBook.css";

type ShelfBookProps = {
  book: BookType;
};

function ShelfBook({ book }: ShelfBookProps) {
  return (
    <div className="shelf-list-item">
      <div>
        <figure className="close">
          <img src={close} alt="" />
        </figure>
        <div className="shelf-book-wrap">
          <img src={book.image} alt="" />
          <div className="shelf-book-desc">
            <div>
              <h3 className="title">{book.title}</h3>
              <p className="author">By {book.author}</p>
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
