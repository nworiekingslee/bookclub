/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "../common/components/Navbar";
import PageHero from "./components/PageHero";
import uuid from "react-uuid";
import "./styles/bookGrid.css";
import BookItem from "./components/BookItem";
// import { books as FETCHED } from "../common/books";
import React, { useEffect, useState } from "react";
import { BookType } from "../common/Types/Book.type";
import axios from "axios";

function Explore() {
  const [FETCHED, SETFETCHED] = useState<BookType[]>([]);
  const [books, setBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);

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
        FETCHED.filter((item) =>
          item?.title.toLowerCase().includes(searchParam.toLowerCase())
        )
      );
    } else if (activeSortParam === "Author") {
      setBooks(
        FETCHED.filter((item) =>
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

      FETCHED.forEach((book) =>
        book?.genres.forEach((keyword) => {
          if (keyword.toLowerCase().includes(searchParam.toLowerCase())) {
            return addItem(book);
          }
        })
      );

      setBooks(newData);
    }
  };

  const fetchUserBook = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:3030/allbooks")
      .then((response) => {
        SETFETCHED(response.data); // Saving the resp data so that we can reset the data without any extra requests
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));

    setLoading(false);
  };

  useEffect(() => {
    fetchUserBook();
  }, []);

  useEffect(() => {
    // Reset search query when the input field is empty
    if (searchParam.length === 0) {
      setBooks(FETCHED);
    }
  }, [searchParam]);

  useEffect(() => {
    // Make a search when the activeSortParam changes
    handleSearch();
  }, [activeSortParam]);

  if (loading) {
    return <div>Fetching all books</div>;
  }

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
