import { useEffect, useState } from "react";
import Navbar from "../common/components/Navbar";
import PageHero from "../Explore/components/PageHero";
import ShelfBook from "./components/ShelfBook";
import axios from "axios";
import { BookType } from "../common/Types/Book.type";

function MyShelf() {
  const [userBooks, setUserBooks] = useState<BookType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3030/user/books")
      .then((response) => {
        setUserBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading user books</div>;
  }

  return (
    <>
      <Navbar />
      <PageHero isShelf />
      <div className="shelf-list-container">
        {userBooks.map((book) => (
          <ShelfBook book={book} />
        ))}
      </div>
    </>
  );
}

export default MyShelf;
