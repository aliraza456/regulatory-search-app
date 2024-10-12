import styled from "styled-components";
const interFontFamily = "'Inter', sans-serif";

// Main container for the SearchPage
export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: ${interFontFamily};

  @media (max-width: 1024px) {
    padding: 15px;
    max-width: 100%; 
  }

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 5px;
    max-width: 100%;
  }
`;