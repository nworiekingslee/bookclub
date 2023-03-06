/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import chevron from "../assets/arrow-up-light.svg";
import completed from "../assets/completed.svg";
import addToShelf from "../assets/add-to-shelf.svg";
import reading from "../assets/reading.svg";
import "../styles/BookActionBar.css";

type SortOption = {
  option: string;
  icon: string | null;
};

type BookActionBarProps = {
  status: string | null;
  type?: string;
};

export default function BookActionBar({
  status,
  type,
}: BookActionBarProps): JSX.Element {
  const [activeSortParam, setActiveSortParam] = useState<SortOption>({
    option: "Want to read",
    icon: null,
  });
  const [isSortDropdown, setSortDropdown] = useState(false);

  const sortParams: SortOption[] = [
    { option: "To-read", icon: addToShelf },
    { option: "Reading", icon: reading },
    { option: "Completed", icon: completed },
  ];

  const changeSortParam = (param: SortOption) => {
    setActiveSortParam(param);
    setSortDropdown(false);
  };

  const toggleSortDropdown = () => {
    setSortDropdown(!isSortDropdown);
  };

  useEffect(() => {
    if (status) {
      const bookStatus = sortParams.find(
        (item) => item.option.toLowerCase() === status.toLowerCase()
      );

      setActiveSortParam(
        bookStatus
          ? bookStatus
          : {
              option: "Want to read",
              icon: null,
            }
      );
    }
  }, [status]);

  return (
    <div
      className={`box-wrap ${type}`}
      style={{
        borderColor:
          activeSortParam.option === "Completed"
            ? "#01625D"
            : activeSortParam.option === "Reading"
            ? "#382110"
            : activeSortParam.option === "To-read"
            ? "#14181F"
            : "none",
      }}
    >
      <div
        className="sort-param"
        style={{
          backgroundColor:
            activeSortParam.option === "Want to read" ? "#14181f" : "",
          color:
            activeSortParam.option === "Completed"
              ? "#01625D"
              : activeSortParam.option === "Reading"
              ? "#382110"
              : activeSortParam.option === "To-read"
              ? "#14181F"
              : "Want to read"
              ? "#FFFFFF"
              : "",
          fontWeight: "bold",
        }}
        onClick={toggleSortDropdown}
      >
        {activeSortParam.icon && (
          <img
            className="dropdown-img"
            src={activeSortParam.icon}
            alt=""
            style={{ width: 30 }}
          />
        )}
        <span>{activeSortParam.option}</span>
      </div>
      {isSortDropdown && (
        <div className="dropdown-menu">
          {sortParams.map((item) => (
            <div
              key={item.option}
              className={`${
                activeSortParam.option === item.option ? "sort-active" : ""
              }`}
              onClick={() => changeSortParam(item)}
              id="opt"
            >
              {item.icon && (
                <img src={item.icon} alt="" style={{ width: 30 }} />
              )}
              <span>{item.option}</span>
            </div>
          ))}
        </div>
      )}
      <button
        className={`btn ${isSortDropdown ? "rotated" : ""}`}
        onClick={() => {
          toggleSortDropdown();
        }}
        style={{
          backgroundColor:
            activeSortParam.option === "Completed"
              ? "#01625D"
              : activeSortParam.option === "Reading"
              ? "#382110"
              : activeSortParam.option === "To-read"
              ? "#14181F"
              : "",
        }}
      >
        <img src={chevron} alt="" className="chev" />
      </button>
    </div>
  );
}
