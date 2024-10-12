import React from "react";
import { PaginationContainer, ArrowButton, PageButton } from "./Pagination.styles.js";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      <ArrowButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </ArrowButton>
      {/* Page Numbers */}
      {pages.map(page => (
        <PageButton key={page} onClick={() => handlePageChange(page)} active={page === currentPage}>
          {page}
        </PageButton>
      ))}
      <ArrowButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;
