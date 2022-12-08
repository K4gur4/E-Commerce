import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background: rgb(238, 238, 238);
  position: sticky;
  top: 50px;
`;
export const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
export const SidebarMenu = styled.div``;

export const SidebarTitle = styled.h3`
  font-size: 13px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  color: black;

  &:active {
    background-color: rgb(86, 89, 94);
    color: white;
  }

  &:hover {
    background-color: rgb(86, 89, 94);
    color: white;

    
  }

  .icon {
      margin-right: 10px;
    }
`;

export const SidebarListItemActive = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  color: black;
  background-color: rgb(86, 89, 94);
  color: white;

  &:hover {
    background-color: rgb(86, 89, 94);
    color: white;
  }

  .icon {
    margin-right: 10px;
  }
`;
