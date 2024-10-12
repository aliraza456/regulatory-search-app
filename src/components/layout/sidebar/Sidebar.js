import React from "react";
import { SidebarContainer, SidebarLogo, SidebarItem } from "./Sidebar.styles";
import homeIcon from "../../../../icons/Home.png";
import searchIcon from "../../../../icons/Search.png";
import settingsIcon from "../../../../icons/Settings.png";
import suitcaseIcon from "../../../../icons/Suitcase.png";
import frameIcon from "../../../../icons/Frame.png";
import fileIcon from "../../../../icons/File.png";
import contactIcon from "../../../../icons/Contact.png";
import vectorIcon from "../../../../icons/Vector.png";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLogo href="#">
        <img src={vectorIcon} alt="Logo" />
      </SidebarLogo>
      <SidebarItem href="#">
        <img src={homeIcon} alt="Home" />
      </SidebarItem>
      <SidebarItem href="#">
        <img src={suitcaseIcon} alt="Help" />
      </SidebarItem>
      <SidebarItem href="#">
        <img src={contactIcon} alt="Help" />
      </SidebarItem>
      <SidebarItem href="#">
        <img src={fileIcon} alt="Help" />
      </SidebarItem>
      <SidebarItem href="#">
        <img src={searchIcon} alt="Search" />
      </SidebarItem>
      <SidebarItem href="#">
        <img src={settingsIcon} alt="Settings" />
      </SidebarItem>
      <SidebarItem href="#">
        <img src={frameIcon} alt="Data" />
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
