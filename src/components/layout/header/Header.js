import React from "react";
import { HeaderSection, ProfileContainer, UserInitials } from "./Header.styles";

const SearchHeader = () => (
  <HeaderSection>
    <ProfileContainer>
      <span>Name Surname</span>
      <UserInitials>CC</UserInitials>
    </ProfileContainer>
    <div className="header-content">
      <h1>AI-Powered Regulatory Search</h1>
      <p>Use the search engine to search for publications from courts and regulators.</p>
    </div>
  </HeaderSection>
);

export default SearchHeader;
