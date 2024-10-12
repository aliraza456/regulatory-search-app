import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 95px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.1);
`;
// Sidebar Logo
export const SidebarLogo = styled.div`
  margin-bottom: 90px;
  img {
    width: 32px;
    height: 32px;
  }
`;
// Sidebar items
export const SidebarItem = styled.a`
  margin: 3px 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 10px;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: #e4f6ed;
    border-radius: 10px;
  }
`;
