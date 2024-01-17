import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container
      fluid
      className="input-group  py-3 px-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
      }}
    >
      <input
        type="search"
        className="form-control mt-5"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={searchValue}
        onChange={handleInputChange}
      />
      <Link to={`/detailpage/${searchValue}`}>
        <button className="btn btn-primary mt-5">
          <Search className="text-white" />
        </button>
      </Link>
    </Container>
  );
};

export default SearchBar;
