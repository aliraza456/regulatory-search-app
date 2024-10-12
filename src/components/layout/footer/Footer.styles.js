import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #F7FCFA;
  padding: 40px 20px;
  padding-left: 150px;

  @media (max-width: 1024px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

// Wrapper for logo and title
export const FooterLogoContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  margin-right: 450px;

  @media (max-width: 1024px) {
    margin-right: 200px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
    justify-content: center;
  }
`;

// Style for the logo image
export const FooterLogo = styled.img`
  height: 35px;
  margin-right: 15px;

  @media (max-width: 480px) {
    height: 30px;
    margin-right: 10px;
  }
`;

// Style for the title next to the logo
export const FooterTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #4caf50;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const FooterText = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const FooterLink = styled.a`
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterCopyright = styled.p`
  color: #666;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const FooterSocialIcon = styled.img`
  height: 34px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    height: 30px;
  }
`;
