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
    width: 30%;
  }

  input[type="date"] {
    width: 30%;
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

  /* Responsive adjustments */
  @media (max-width: 1080px) {
    flex-direction: column; 
    align-items: center;
    select,
    input[type="date"] {
      width: 70%;
    }
  }
    @media (max-width: 768px) {
    flex-direction: column; 
    select,
    input[type="date"] {
      width: 40%;
    }

    .clear-filters {
      width: 50%; 
      text-align: center; 
    }
  }
`;
