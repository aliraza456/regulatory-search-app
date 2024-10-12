import React from "react";
import { ResultsHeaderContainer, SortingControls } from "./ResultsHeader.styles";

const ResultsHeader = ({ resultsCount, resultsPerPage, handleResultsPerPageChange, sortOption, handleSortChange }) => {
  return (
    <ResultsHeaderContainer>
      {/* Left side */}
      <div>
        <h2>Results</h2>
        <p>Showing {resultsCount} results</p>
      </div>

      {/* Right side: Sorting options */}
      <SortingControls>
        <select value={resultsPerPage} onChange={handleResultsPerPageChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>

        <select value={sortOption} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="alphabetical">Sort Alphabetically</option>
          <option value="date">Sort by Date</option>
        </select>
      </SortingControls>
    </ResultsHeaderContainer>
  );
};

export default ResultsHeader;
