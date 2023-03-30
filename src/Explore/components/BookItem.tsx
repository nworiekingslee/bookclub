import React, { useState } from "react";
import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
import { BookType } from "../../common/Types/Book.type";
import starFilledWhite from "../../common/assets/star-filled-light.svg";
import '../styles/bookModal.css';
import starFilledYellow from "../../common/assets/small-star-filled-yellow.svg";

type BookItemProps = {
  book: BookType;
};

function BookItem({ book }: BookItemProps) {
  const [showModal, setShowModal] = useState(false);

  const handleBookClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalClass = `modal ${showModal ? "is-active" : ""}`;

  return (
    <div className="wrapper">
      <div className="book-item" onClick={handleBookClick}>
        <div className="book-hover-overlay">
          <div className="overlay-content">
            <p>Rate this book</p>
            <div className="star-wrap">
              <Rate rating={0} variant="small" color="dark" filledColor={starFilledWhite} />
            </div>
          </div>
        </div>
        <img
          src={book?.image}
          alt=""
          className={`${book.status ? "border" : ""} book-img`}
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
      </div>
      <BookActionBar type="no-top" status={book.status} />

      {/* Modal starts */}
      <div className={modalClass}>

        <div className="modal-background" ></div>

        <button className="modal-close is-large" aria-label="close" onClick={handleCloseModal}></button>

        <div className="modal-content">

          {/* Book image and rating starts */}
          <section className="book-box">
            <div className="box">
              <img
                src={book?.image}
                alt=""
                className={`${book.status ? "border" : ""} book-modal-img`}
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
            </div>
            <BookActionBar type="no-top" status={book.status} />
            <div className="rate">
              <div className="modal-star-wrap">
                <Rate rating={0} variant="big" color="light" filledColor={starFilledYellow} />
                <p>Rate this book</p>
              </div>
            </div>
          </section>
          {/* Book image and rating ends */}

          {/* Book title and description starts */}
          <section className="desc-box">

            <div className="header">
              <h1>{book.title}</h1>
              <h2>{book.author}</h2>
            </div>

            <div className="total-rating">
              <Rate rating={4} variant="big" color="light" filledColor={starFilledYellow} />
              <div className="total-numbers">
                <h1>4.0</h1>
              </div>
              <div className="num-ratings">
                <p><span>200</span>Ratings</p>
              </div>
            </div>

            <div className="book-description">
              <p>{book.desc}</p>
            </div>
            
          </section>
          {/* Book title and description ends */}
        </div>
        
      </div>
      {/* Modal ends */}
    </div>
  );
}

export default BookItem;
