import { useEffect, useState } from "react";
import Navbar from "../common/components/Navbar";
import PageHero from "../Explore/components/PageHero";
import ShelfBook from "./components/ShelfBook";
import axios from "axios";
import { BookType } from "../common/Types/Book.type";
import uuid from "react-uuid";

function MyShelf() {
  const [FETCHED, SETFETCHED] = useState<BookType[]>([]);
  const [userBooks, setUserBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter & Search params
  const [searchParam, setSearchParam] = useState("");
  const [activeSortParam, setActiveSortParam] = useState("All");
  // Filter & Search params ends here

  const bookStatus = ["All", "To-read", "Reading", "Completed"];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const handleSearch = () => {
    if (activeSortParam === "All") {
      setUserBooks(
        FETCHED.filter((item) =>
          item?.title.toLowerCase().includes(searchParam.toLowerCase())
        )
      );
    } else {
      setUserBooks(
        FETCHED.filter(
          (item) =>
            item?.status?.toLowerCase() === activeSortParam.toLowerCase() &&
            item?.title.toLowerCase().includes(searchParam.toLowerCase())
        )
      );
    }
  };

  const fetchUserBook = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:3030/user/books")
      .then((response) => {
        SETFETCHED(response.data); // Saving the resp data so that we can reset the data without any extra requests
        setUserBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));

    setLoading(false);
  };

  useEffect(() => {
    // Make a search when the activeSortParam changes
    handleSearch();
  }, [activeSortParam]);

  useEffect(() => {
    // Reset search query when the input field is empty
    if (searchParam.length === 0) {
      setUserBooks(FETCHED);
    }
  }, [searchParam]);

  useEffect(() => {
    fetchUserBook();
  }, []);

  if (loading) {
    return <div>Loading user books</div>;
  }

  return (
    <>
      <Navbar />
      <PageHero
        handleChange={(e) => onChange(e)}
        search={searchParam}
        filterList={bookStatus}
        filterParam={activeSortParam}
        setFilterParam={(param) => setActiveSortParam(param)}
        handleSearch={() => handleSearch()}
        isShelf
      />
      <div className="shelf-list-container">
        {userBooks.map((book) => (
          <ShelfBook key={uuid()} book={book} />
        ))}
      </div>
    </>
  );
}

export default MyShelf;
