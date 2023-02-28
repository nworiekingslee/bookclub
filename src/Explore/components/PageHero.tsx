import "../styles/pageHero.css";
import video from "../assets/videos/hero.mp4";

function PageHero() {
  return (
    <div className="page-hero">
      <div className="video-wrap">
        <video autoPlay muted loop id="heroVideo">
          <source src={video} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>

      <div className="text-wrap">
        <div>
          <h3>Explore the biggest book collections in Nigeria</h3>
          <p>
            Millions of writers and publishers around the world showcase their
            work on BookClub - the home to the world’s best books.
          </p>
        </div>
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
