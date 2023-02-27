import "../styles/pageHero.css";

function PageHero() {
  return (
    <div className="page-hero">
      <div className="text-wrap">
        <h3>Explore the biggest book collections in Nigeria</h3>
        <p>
          Millions of writers and publishers around the world showcase their
          work on BookClub - the home to the world’s best books.
        </p>
      </div>

      <div className="search-box-wrap">
        <div className="search-box">
          <div className="search-input">
            <p>Search</p>
          </div>
          <div className="filter-wrap">
            {" "}
            <p>Title</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHero;
