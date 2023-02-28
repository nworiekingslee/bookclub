import "../styles/pageHero.css";
import video from "../assets/videos/hero.mp4";
import chevron from "../../common/assets/arrow-up.svg";
import searchIcon from "../../common/assets/search.svg";

type PageHeroProps = {
  isShelf?: boolean;
};

function PageHero({ isShelf }: PageHeroProps) {
  return (
    <div className={`${!isShelf ? "wrap-md" : "wrap-sm"} page-hero`}>
      {!isShelf && (
        <div className="video-wrap">
          <video autoPlay muted loop id="heroVideo">
            <source src={video} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
      )}

      <div className={`${isShelf ? "shelf" : ""} text-wrap`}>
        <div>
          <h3>
            {isShelf
              ? "Welcome back Kingsley"
              : "Explore the biggest book collections in Nigeria"}
          </h3>
          <p>
            {isShelf
              ? "Browse your shelf and select a book to read today"
              : "Millions of writers and publishers around the world showcase their work on BookClub - the home to the world’s best books."}
          </p>
        </div>
      </div>

      <div className="search-box-wrap">
        <div className="search-box">
          <div className="search-input">
            {/* <div className="search-box"> */}
            <label htmlFor="search" className="label">
              <figure className="img-box">
                <img src={searchIcon} alt="" className="img" />
              </figure>
            </label>
            <input
              placeholder="search"
              type="text"
              name="search"
              id="search"
              className="input"
            />
            {/* </div> */}
          </div>
          <div className="filter-wrap">
            <p>Title</p> <img src={chevron} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHero;
