import Navbar from "../common/components/Navbar";
import PageHero from "../Explore/components/PageHero";
import ShelfBook from "./components/ShelfBook";

function MyShelf() {
  return (
    <>
      <Navbar />
      <PageHero isShelf />
      <div className="shelf-list-container">
        <ShelfBook />
        <ShelfBook />
      </div>
    </>
  );
}

export default MyShelf;
