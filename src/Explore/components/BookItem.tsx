import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
// import bookCover from "../assets/book-cover.png";

type BookItemProps = {
  book?: {
    image: string;
    title: string;
    author: string;
    desc: string;
    category: string[];
    rating: number;
    myRate: null | number;
    "total-ratings": number;
    status: string | null;
  };
};

function BookItem({ book }: BookItemProps) {
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
      <img src={book?.image} alt="" />
      <BookActionBar />
    </li>
  );
}

export default BookItem;
