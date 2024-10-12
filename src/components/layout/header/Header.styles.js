import styled from "styled-components";

// Main header section container
export const HeaderSection = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 0 20px;
  height:50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }

  .header-content {
    margin-bottom: 30px;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 150px; 
    word-wrap: break-word;

    @media (max-width: 1024px) {
      font-size: 30px;
      margin-top: 40px;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
      margin-top: 30px;
    }
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
    word-wrap: break-word;

    @media (max-width: 1024px) {
      font-size: 16px;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

// Profile section
export const ProfileContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 16px;
    color: #333;
    word-wrap: break-word;

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    right: 10px;
  }

  @media (max-width: 480px) {
    right: 5px;
    top: 10px;
  }
`;

// User initials container
export const UserInitials = styled.div`
  width: 40px;
  height: 40px;
  background-color: green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 300;
  color: white;

  @media (max-width: 1024px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
`;
