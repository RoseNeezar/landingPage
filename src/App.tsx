import React from "react";
import styled from "styled-components";
import NavbarLogo from "./App/svg/navbarLogo.svg";
import Home from "./App/features/home";

const NavbarWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.black};
  height: 5.6rem;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 5; */
`;
const NavbarContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 130rem;
  padding: 0 3.2rem;
`;

const NavbarLogoWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const NavbarText = styled.div`
  font-size: ${({ theme }) => theme.navbar.fontSize};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const NavbarNavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  display: flex;
  align-items: center;
`;
const NavbarNavItem = styled.li`
  padding-left: 1.8vw;
  cursor: pointer;
`;

const App = () => {
  return (
    <>
      <NavbarWrapper>
        <NavbarContentWrapper>
          <NavbarLogoWrapper>
            <img src={NavbarLogo} alt="doo holding logo" />
          </NavbarLogoWrapper>
          <NavbarNavWrapper>
            <NavbarNavItem>
              <NavbarText>Home</NavbarText>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarText>Brands</NavbarText>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarText>Values</NavbarText>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarText>Offices</NavbarText>
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarText>Contact Us</NavbarText>
            </NavbarNavItem>
          </NavbarNavWrapper>
        </NavbarContentWrapper>
      </NavbarWrapper>
      <Home />
    </>
  );
};

export default App;
