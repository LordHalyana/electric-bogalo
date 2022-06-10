import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.categories.some((category) =>
        category.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <>
      <form className="form-inline-row ">
        <div className="col-8 ">
          <input
            onChange={handleFilter}
            className="form-control"
            type="search"
            placeholder="Search"
          />
        </div>
        {filteredData.length !== 0 && (
          <div className="col-4 dataResult">
            {filteredData.slice(0, 5).map((value, key) => {
              return (
                <a
                  className="dataItem"
                  href={`/articles/${value._id}`}
                  style={{ color: "black" }}
                >
                  <p className="mt-4">
                    {value.title}
                    <br />
                    <small className="mx-2">{value.description}</small>
                  </p>
                </a>
              );
            })}
          </div>
        )}
      </form>
    </>
  );
};
export default SearchBar;
