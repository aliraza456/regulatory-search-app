import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #F7FCFA;
  padding: 40px 20px;
  padding-left: 150px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 0 20px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

// Wrapper for logo and title
export const FooterLogoContainer = styled.div`
  display: flex;
  margin-bottom:15px;
  align-items: center;  // Align logo and title vertically centered
  margin-right: 450px;
`;

// Style for the logo image
export const FooterLogo = styled.img`
  height: 35px;
  margin-right: 15px;  // Space between logo and title
`;

// Style for the title next to the logo
export const FooterTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #4caf50;  // Change to your desired color
`;

export const FooterText = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid #e0e0e0;
`;

export const FooterCopyright = styled.p`
  color: #666;
  font-size: 14px;
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const FooterSocialIcon = styled.img`
  height: 34px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
