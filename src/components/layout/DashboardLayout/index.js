import React from "react";
import Sidebar from "./sidebar/Sidebar.js";
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
import { LayoutContainer, ContentWrapper } from "./styles.js"; 

const DashboardLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentWrapper>
        <Header />
        {children}
        <Footer />
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default DashboardLayout;
