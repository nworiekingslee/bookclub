/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../common/components/Navbar";
import PageHero from "./components/PageHero";
import uuid from "react-uuid";
import "./styles/bookGrid.css";
import BookItem from "./components/BookItem";
import { books as bookData } from "../common/books";
import React, { useEffect, useState } from "react";
import { BookType } from "../common/Types/Book.type";

function Explore() {
  const [books, setBooks] = useState<BookType[]>(bookData);

  // Filter & Search params
  const [searchParam, setSearchParam] = useState("");
  const [activeSortParam, setActiveSortParam] = useState("Title");
  // Filter & Search params ends here

  const sortParams = ["Title", "Author", "Genre"];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const handleSearch = () => {
    if (activeSortParam === "Title") {
      setBooks(
        bookData.filter((item) =>
          item?.title.toLowerCase().includes(searchParam.toLowerCase())
        )
      );
    } else if (activeSortParam === "Author") {
      setBooks(
        bookData.filter((item) =>
          item?.author.toLowerCase().includes(searchParam.toLowerCase())
        )
      );
    } else {
      const newData: BookType[] = [];

      const addItem = (book: BookType) => {
        if (newData.includes(book)) {
          // skip
        } else {
          newData.push(book);
        }
      };

      bookData.forEach((book) =>
        book?.genres.forEach((keyword) => {
          if (keyword.toLowerCase().includes(searchParam.toLowerCase())) {
            return addItem(book);
          }
        })
      );

      setBooks(newData);
    }
  };

  useEffect(() => {
    // Reset search query when the input field is empty
    if (searchParam.length === 0) {
      setBooks(bookData);
    }
  }, [searchParam]);

  useEffect(() => {
    // Make a search when the activeSortParam changes
    handleSearch();
  }, [activeSortParam]);

  return (
    <div>
      <Navbar />
      <PageHero
        handleChange={(e) => onChange(e)}
        search={searchParam}
        filterList={sortParams}
        filterParam={activeSortParam}
        setFilterParam={(param) => setActiveSortParam(param)}
        handleSearch={() => handleSearch()}
      />
      <div className="booklist-section">
        <ol className="booklist-wrapper">
          {books.map((book) => (
            <BookItem key={uuid()} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Explore;
