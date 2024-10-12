import styled from "styled-components";

export const ResultsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 900px;
  margin: 30px;
`;

export const SortingControls = styled.div`
  display: flex;
  gap: 10px;

  select {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: white;
  }
`;
