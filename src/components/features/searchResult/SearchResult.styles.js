import styled from "styled-components";
const interFontFamily = "'Inter', sans-serif";

export const ResultsContainer = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  font-family: ${interFontFamily};
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 15px;
    width:70%;
  }

  @media (max-width: 768px) {
    padding: 10px;
    align-items:center;

  @media (max-width: 480px) {
    padding: 10px;
    align-items:center;
  }}
`;

export const ResultCard = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 50px;
  font-family: ${interFontFamily};
  background-color: white;

  span {
    display: block;
    font-size: 14px;
    color: #000000;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 12px;
      text-align:center;
    }

    @media (max-width: 480px) {
      font-size: 10px;
      text-align:center;
    }
  }

  h2 {
    color: #26c281;
    font-size: 26px;
    margin-bottom: 10px;
    cursor: pointer;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 22px;
      text-align:center;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      text-align:center;
    }
  }

  p {
    color: black;
    margin-bottom: 15px;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
      text-align:center;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  .result-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;  
      align-items: center;
      text-align:center;
    }

    .detail-item {
      flex: 1;
      align-items: flex-start;
      justify-content: space-between;

      strong {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }

      span {
        font-size: 16px;
        color: #000;

        @media (max-width: 768px) {
          font-size: 14px;
        }

        @media (max-width: 480px) {
          font-size: 12px;
        }
      }
    }
  }
`;
