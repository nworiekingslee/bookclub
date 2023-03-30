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
import Pagination from "../common/components/Pagination"; // import the Pagination component

const Explore: React.FC = () => {
  const [FETCHED, SETFETCHED] = useState<BookType[]>([]);
  const [books, setBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParam, setSearchParam] = useState('');
  const [activeSortParam, setActiveSortParam] = useState('Title');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10; // number of books displayed per page

  const sortParams = ['Title', 'Author', 'Genre'];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const handleSearch = () => {
    if (activeSortParam === 'Title') {
      setBooks(
        FETCHED.filter((item) =>
          item?.title.toLowerCase().includes(searchParam.toLowerCase())
        )
      );
    } else if (activeSortParam === 'Author') {
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
    setCurrentPage(1); // reset to first page after searching
  };

  const fetchUserBook = async () => {
    setLoading(true);
    await axios
      .get('http://localhost:3030/allbooks')
      .then((response) => {
        SETFETCHED(response.data);
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
    if (searchParam.length === 0) {
      setBooks(FETCHED);
    }
  }, [searchParam]);

  useEffect(() => {
    handleSearch();
  }, [activeSortParam]);

  const currentBooks = books.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);

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
          {currentBooks.map((book) => (
            <BookItem key={uuid()} book={book} />
          ))}
        </ol>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber)}
      />
    </div>
  );
}

export default Explore;
