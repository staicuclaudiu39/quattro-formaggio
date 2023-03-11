import styled from "@emotion/styled";
import React, { useState } from "react";

const Input = styled("input")`
  border: 1px solid grey;
  border-radius: 5px;
  height: 40px;
  width: 400px;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;

  &:hover,
  &:focus {
    border: 1.5px solid #F2622E;
    background-color: white;
  }
`;

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = () => {
    console.log(search);
  };

  const handleKeyDown = (e) => {
    if (e === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Input
      onChange={handleSearch}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      placeholder="Search..."
    />
  );
};

export default Searchbar;