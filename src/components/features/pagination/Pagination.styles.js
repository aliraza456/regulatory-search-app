import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 100px;
  gap: 30px;
`;

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    border: 1px solid #333;
  }

  &:disabled {
    border: 1px solid #ccc;
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const PageButton = styled.button`
  background-color: white;
  border: none;
  color: ${props => (props.active ? "#07914a" : "#333")};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #07914a;
  }
`;
