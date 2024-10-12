import styled from "styled-components";
const interFontFamily = "'Inter', sans-serif";
export const FilterBar = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 5px;
  justify-content: space-between;

   {
    select,
    input[type="date"] {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 16px;
      width: 100%;
      font-family: ${interFontFamily};
      background-color: white;
    }
  }

  select {
    width: 30%; // Adjusting select to be more compact like in the image
  }

  input[type="date"] {
    width: 20%;
  }

  .clear-filters {
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;