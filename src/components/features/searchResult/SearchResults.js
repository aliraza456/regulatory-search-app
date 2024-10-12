import React from "react";
import { ResultsContainer, ResultCard } from "./SearchResult.styles";

const SearchResults = ({ results }) => (
  <ResultsContainer>
    {results.length === 0 ? (
      <p>No results found</p>
    ) : (
      results.map(result => (
        <ResultCard key={result.id}>
          <span>{result.date}</span>
          <h2>{result.title}</h2>
          <p>{result.content}</p>
          <div className="result-details">
            <div className="detail-item">
              <strong>Category</strong>
              <span>{result.category}</span>
            </div>
            <div className="detail-item">
              <strong>Decision</strong>
              <span>{result.decision}</span>
            </div>
            <div className="detail-item">
              <strong>Company</strong>
              <span>{result.company}</span>
            </div>
          </div>
        </ResultCard>
      ))
    )}
  </ResultsContainer>
);

export default SearchResults;
