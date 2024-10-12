import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterLogoContainer,  
  FooterLogo,
  FooterTitle, 
  FooterLink,
  FooterText,
  FooterIcons,
  FooterBottom,
  FooterCopyright,
  FooterSocialIcon,
} from './Footer.styles'; 
import logo from '../../../../icons/Vector.png'; 
import facebookIcon from '../../../../icons/facebook.svg';
import twitterIcon from '../../../../icons/twitter.svg';
import instagramIcon from '../../../../icons/instagram.svg';
import youtubeIcon from '../../../../icons/youtube.svg';
import linkedinIcon from '../../../../icons/linkedin.svg';
import tiktokIcon from '../../../../icons/tiktok.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Left Column: Logo and contact info */}
        <FooterColumn>
          <FooterLogoContainer>
            <FooterLogo src={logo} alt="CourtCorrect Logo" />
            <FooterTitle>courtcorrect</FooterTitle>  
          </FooterLogoContainer>
          <FooterText>Justice for all.</FooterText>
          <FooterText>
            hello@courtcorrect.com <br />
            33 Percy St, London W1T 2DF <br />
            020 7867 3925
          </FooterText>
        </FooterColumn>

        {/* Middle Column: Quick Links */}
        <FooterColumn>
          <h3>Quick Links</h3>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Data</FooterLink>
          <FooterLink href="#">Cases</FooterLink>
          <FooterLink href="#">Customers</FooterLink>
          <FooterLink href="#">Search Engine</FooterLink>
          <FooterLink href="#">Custom Fields</FooterLink>
          <FooterLink href="#">Support</FooterLink>
        </FooterColumn>

        {/* Right Column: Legals */}
        <FooterColumn>
          <h3>Legals</h3>
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">AI Safety Policy</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
          <FooterLink href="#">Compliance Statement</FooterLink>
        </FooterColumn>
      </FooterContent>

      {/* Footer bottom section: Social media icons */}
      <FooterBottom>
        <FooterCopyright>© 2023 CourtCorrect LTD</FooterCopyright>
        <FooterIcons>
          <FooterSocialIcon src={facebookIcon} alt="Facebook" />
          <FooterSocialIcon src={twitterIcon} alt="Twitter" />
          <FooterSocialIcon src={instagramIcon} alt="Instagram" />
          <FooterSocialIcon src={youtubeIcon} alt="YouTube" />
          <FooterSocialIcon src={linkedinIcon} alt="LinkedIn" />
          <FooterSocialIcon src={tiktokIcon} alt="TikTok" />
        </FooterIcons>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
