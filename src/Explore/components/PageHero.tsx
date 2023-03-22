import "../styles/pageHero.css";
import video from "../assets/videos/hero.mp4";
import SearchSort from "../../common/components/SearchSort";


type PageHeroProps = {
  isShelf?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search?: string;
  filterList?: string[];
  filterParam?: string;
  setFilterParam?: (param: string) => void;
  handleSearch?: () => void;
  // Todo: search, hanldeChange, search, filterList, filterParam. setFilterParam shouldn't be optional
};

function PageHero({
  isShelf,
  search,
  filterList,
  filterParam,
  setFilterParam,
  handleChange,
  handleSearch,
}: PageHeroProps) {
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

      <SearchSort
        handleChange={(e) => handleChange && handleChange(e)}
        search={search ? search : ""}
        filterList={filterList ? filterList : []}
        filterParam={filterParam ? filterParam : ""}
        setFilterParam={(param) => setFilterParam && setFilterParam(param)}
        handleSearch={() => handleSearch && handleSearch()}
      />
    </div>
  );
}

export default PageHero;
