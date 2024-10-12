import React from "react";
import { FilterBar } from "./FIlter.styles";

const Filters = ({
  selectedCategory,
  selectedDecision,
  selectedCompany,
  selectedDate,
  categories,
  decisions,
  companies,
  handleCategoryChange,
  handleDecisionChange,
  handleCompanyChange,
  handleDateChange,
  clearFilters,
}) => {
  const areFiltersApplied = selectedCategory || selectedDecision || selectedCompany || selectedDate;

  return (
    <>
      <FilterBar>
        {/* Category Filter */}
        <select style={{ padding: "10px" }} value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Category</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Decision Filter */}
        <select style={{ padding: "10px" }} value={selectedDecision} onChange={handleDecisionChange}>
          <option value="">Decision</option>
          {decisions.map(decision => (
            <option key={decision} value={decision}>
              {decision}
            </option>
          ))}
        </select>

        {/* Company Filter */}
        <select style={{ padding: "10px" }} value={selectedCompany} onChange={handleCompanyChange}>
          <option value="">Company</option>
          {companies.map(company => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>

        {/* Date Filter */}
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </FilterBar>

      {/*"Clear Filters" */}
      {areFiltersApplied && (
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={clearFilters}
            style={{
              background: "#fff",
              color: "#26C281",
              padding: "10px 20px",
              border: "1px solid #26C281",
              borderRadius: "4px",
              cursor: "pointer",
            }}>
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
};

export default Filters;
