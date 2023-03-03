import { useState } from "react";
import chevron from "../assets/arrow-up.svg";
import searchIcon from "../assets/search.svg";
import "../styles/SearchSort.css";

export default function SearchSort() {
  const [activeSortParam, setActiveSortParam] = useState("Title");
  const [isSortDropdown, setSortDropdown] = useState(false);

  const changeSortParam = (param: string) => {
    setActiveSortParam(param);
    setSortDropdown(false);
  };

  const sortParams = ["Title", "Author", "Genre"];
  return (
    <div className="search-box-wrap">
      <div className="search-box">
        <div className="search-input">
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
        </div>
        <div className="filter-wrap">
          <div
            className="filter-btn"
            onClick={() => {
              setSortDropdown(true);
            }}
          >
            <p>{activeSortParam}</p> <img src={chevron} alt="" />
          </div>
          {isSortDropdown && (
            <div className="dropdown">
              {sortParams.map((item) => (
                <p
                  onClick={() => changeSortParam(item)}
                  className={`${activeSortParam === item ? "sort-active" : ""}`}
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
