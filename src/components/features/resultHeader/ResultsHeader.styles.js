import styled from "styled-components";

export const ResultsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 900px;
  margin: 30px;

  @media (max-width: 1024px) {
    margin: 30px; 
    flex-direction: row; 
    justify-content: space-around; 
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
    margin: 40px 20px;
  }
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

  @media (max-width: 1024px) {
    gap: 3px; 
  }

  @media (max-width: 768px) {
    width: 40%;
    flex-direction: column; 
    align-items:center; 
    
    select {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
