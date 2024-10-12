import React, { useState, useEffect, useMemo, useCallback } from "react";
import { getSearchData } from "../../services/index.js";
import { SearchPageContainer } from "./SearchPage.styles";
import SearchForm from "../features/searchForm/SearchForm.js";
import Filters from "../features/filter/Filters.js";
import SearchResults from "../features/searchResult/SearchResults.js";
import ResultsHeader from "../features/resultHeader/ResultsHeader.js";
import Pagination from "../features/pagination/Pagination.js";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newSearchValue, setNewSearchValue] = useState("");
  const [sortOption, setSortOption] = useState("Sort By");
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filters state
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDecision, setSelectedDecision] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Load initial search data
  useEffect(() => {
    const data = getSearchData();
    setSearchResults(data);
  }, []);

  // Handle search input changes
  const handleSearch = e => {
    setNewSearchValue(e.target.value);
  };

  const handleSearchChange = () => {
    if (newSearchValue.trim() === "") {
      setSearchQuery("");
      setSearchResults(getSearchData());
    } else {
      setSearchQuery(newSearchValue);
    }
    setCurrentPage(1);
  };

  // Handle filters
  const handleCategoryChange = e => setSelectedCategory(e.target.value);
  const handleDecisionChange = e => setSelectedDecision(e.target.value);
  const handleCompanyChange = e => setSelectedCompany(e.target.value);
  const handleDateChange = e => setSelectedDate(e.target.value);

  // Clear filters function
  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedDecision("");
    setSelectedCompany("");
    setSelectedDate("");
  };

  // Handle sort change
  const handleSortChange = e => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  // Handle results per page change
  const handleResultsPerPageChange = e => {
    setResultsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Sort results based on the selected sort option
  const sortResults = useCallback(
    results => {
      const resultsCopy = [...results];
      if (sortOption === "alphabetical") {
        return resultsCopy.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === "date") {
        return resultsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return results;
    },
    [sortOption]
  );

  // Filter results based on search query and filters
  const filteredResults = useMemo(() => {
    return searchResults.filter(result => {
      const matchesSearchQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "" || result.category === selectedCategory;
      const matchesDecision = selectedDecision === "" || result.decision === selectedDecision;
      const matchesCompany = selectedCompany === "" || result.company === selectedCompany;
      const matchesDate = selectedDate === "" || result.date === selectedDate;

      return matchesSearchQuery && matchesCategory && matchesDecision && matchesCompany && matchesDate;
    });
  }, [searchResults, searchQuery, selectedCategory, selectedDecision, selectedCompany, selectedDate]);

  // Apply sorting to the filtered results
  const sortedResults = useMemo(() => sortResults(filteredResults), [filteredResults, sortResults]);

  // Paginate the sorted results
  const totalPages = Math.ceil(sortedResults.length / resultsPerPage);
  const paginatedResults = useMemo(
    () => sortedResults.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage),
    [sortedResults, currentPage, resultsPerPage]
  );

  // Collect unique values for filters from searchResults
  const categories = [...new Set(searchResults.map(result => result.category))];
  const decisions = [...new Set(searchResults.map(result => result.decision))];
  const companies = [...new Set(searchResults.map(result => result.company))];

  return (
    <SearchPageContainer>
      <SearchForm searchValue={newSearchValue} handleSearch={handleSearch} handleSearchChange={handleSearchChange} />

      <Filters
        selectedCategory={selectedCategory}
        selectedDecision={selectedDecision}
        selectedCompany={selectedCompany}
        selectedDate={selectedDate}
        categories={categories}
        decisions={decisions}
        companies={companies}
        handleCategoryChange={handleCategoryChange}
        handleDecisionChange={handleDecisionChange}
        handleCompanyChange={handleCompanyChange}
        handleDateChange={handleDateChange}
        clearFilters={clearFilters}
      />

      <ResultsHeader
        resultsCount={filteredResults.length}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        resultsPerPage={resultsPerPage}
        handleResultsPerPageChange={handleResultsPerPageChange}
      />

      <SearchResults results={paginatedResults} />
      
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
    </SearchPageContainer>
  );
};

export default SearchPage;
