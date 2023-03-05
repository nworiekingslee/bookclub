import React, { useState } from 'react';
import chevron from "../assets/arrow-up-light.svg";
import completed from "../assets/completed.svg";
import addToShelf from "../assets/add-to-shelf.svg";
import reading from "../assets/reading.svg";
import "../styles/BookActionBar.css";

type SortOption = {
  option: string;
  icon: string | null;
}

export default function BookActionBar(): JSX.Element {
  const [activeSortParam, setActiveSortParam] = useState<SortOption>({
    option: "Want to read",
    icon: null
  });
  const [isSortDropdown, setSortDropdown] = useState(false);
  const [isChevronRotated, setChevronRotation] = useState(false);

  const sortParams: SortOption[] = [
    { option: "Add to shelf", icon: addToShelf },
    { option: "Reading", icon: reading },
    { option: "Completed", icon: completed },
  ];

  const changeSortParam = (param: SortOption) => {
    setActiveSortParam(param);
    setSortDropdown(false);
  };

  const toggleSortDropdown = () => {
    setSortDropdown(!isSortDropdown);
    setChevronRotation(!isChevronRotated);
  };

  return (
    <div
      className="box-wrap" style={{ 
        border: activeSortParam.option === "Completed" ? "1px solid #01625D" 
          : activeSortParam.option === "Reading" ? "1px solid #382110" 
          : activeSortParam.option === "Add to shelf" ? "1px solid #14181F" 
          : "none" 
        }}
    >
      <div
        className="sort-param"
        style={{
          backgroundColor: activeSortParam.option === "Want to read" ? "black" : "",
          color: activeSortParam.option === "Completed" ? "#01625D" 
            : activeSortParam.option === "Reading" ? "#382110" 
            : activeSortParam.option === "Add to shelf" ? "#14181F" 
            : "Want to read" ? "#FFFFFF" : "",
          fontWeight: 'bold',
        }}
        onClick={toggleSortDropdown}
      >
        {activeSortParam.icon && <img src={activeSortParam.icon} alt="" style={{ width: 30 }} />}
        <span>{activeSortParam.option}</span>
      </div>
      {isSortDropdown && (
        <div className="dropdown-menu">
          {sortParams.map((item) => (
            <div
              key={item.option}
              className={`${activeSortParam.option === item.option ? "sort-active" : ""}`}
              onClick={() => changeSortParam(item)}
              id="opt"
            >
              {item.icon && <img src={item.icon} alt="" style={{ width: 30 }} />}
              <span>{item.option}</span>
            </div>
          ))}
        </div>
      )}
      <button
        className={`btn ${isChevronRotated ? "rotated" : ""}`}
        onClick={() => {
          toggleSortDropdown();
          setChevronRotation(!isChevronRotated);
        }}
        style={{
          backgroundColor:
            activeSortParam.option === "Completed"
              ? "#01625D"
              : activeSortParam.option === "Reading"
              ? "#382110"
              : activeSortParam.option === "Add to shelf"
              ? "#14181F"
              : "",
        }}
      >
        <img
          src={chevron}
          alt=""
          className="chev"
          style={{ width: 15, transform: isChevronRotated ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
    </div>
  );
}
