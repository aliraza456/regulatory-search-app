import styled from "styled-components";

export const HeaderSection = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-bottom: 80px;

  .header-content {
    margin-bottom: 30px;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 150px;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 20px;
  right:  20px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 16px;
    color: #333;
  }
`;

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
`;
