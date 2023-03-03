import "../styles/pageHero.css";
import video from "../assets/videos/hero.mp4";
import SearchSort from "../../common/components/SearchSort";

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

      <SearchSort />
    </div>
  );
}

export default PageHero;
