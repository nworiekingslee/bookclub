import { useState } from "react";
import chevron from "../assets/arrow-up.svg";
import searchIcon from "../assets/search.svg";
import uuid from "react-uuid";
import "../styles/SearchSort.css";

type SearchSortProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  filterList: string[];
  filterParam: string;
  setFilterParam: (param: string) => void;
  handleSearch: () => void;
};

export default function SearchSort({
  handleChange,
  search,
  filterList,
  filterParam,
  setFilterParam,
  handleSearch,
}: SearchSortProps) {
  const [isSortDropdown, setSortDropdown] = useState(false);

  const changeSortParam = (param: string) => {
    setFilterParam(param);
    setSortDropdown(false);
  };

  return (
    <div className="search-box-wrap">
      <div className="search-box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="search-input"
        >
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
            value={search}
            onChange={handleChange}
          />
        </form>
        <div className="filter-wrap">
          <div
            className={`filter-btn ${isSortDropdown ? "active" : ""}`}
            onClick={() => {
              setSortDropdown((prev) => !prev);
            }}
          >
            <p className="selected-sort-param">{filterParam}</p>{" "}
            <img src={chevron} alt="" />
          </div>
          {isSortDropdown && (
            <div className="dropdown animate">
              {filterList.map((item) => (
                <p
                  key={uuid()}
                  onClick={() => changeSortParam(item)}
                  className={`${filterParam === item ? "sort-active" : ""}`}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
