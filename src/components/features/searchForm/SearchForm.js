import React from "react";
import { SearchFormContainer, SearchInput, SearchButton } from "./SearchForm.styles";

const SearchForm = ({ searchValue, handleSearch, handleSearchChange }) => (
  <SearchFormContainer>
    <SearchInput type="text" placeholder="Search" value={searchValue} onChange={handleSearch} />
    <SearchButton onClick={handleSearchChange}>Search</SearchButton>
  </SearchFormContainer>
);

export default SearchForm;
