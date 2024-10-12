import styled from "styled-components";
const interFontFamily = "'Inter', sans-serif";

export const SearchFormContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  flex: 1;
  z-index: 1;
  pointer-events: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: ${interFontFamily};
`;

export const SearchButton = styled.button`
  padding: 15px 70px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: ${interFontFamily};

  &:disabled {
    background-color: #26c281;
    cursor: not-allowed;
  }
`;