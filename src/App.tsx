import React, { useContext } from "react";
import styled from "styled-components";
import NavbarLogo from "./App/svg/navbarLogo.svg";
import Home from "./App/features/home";
import Disclaimer from "./App/features/disclaimer";
import DisclaimerModal from "react-modal";
import { RootStoreContext } from "./App/store/rootStore";
import { observer } from "mobx-react-lite";
import { Helmet } from "react-helmet";
import Brands from "./App/features/brands";
import ScrollTo from "react-scroll-into-view";
import CoreValues from "./App/features/core-values";
import GlobalOffices from "./App/features/global-offices";
import Contact from "./App/features/contacts";

const NavbarWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.black};
  height: 5.6rem;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
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

const ModalLayout = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -36rem)",
    width: "68rem",
    borderRadius: "1rem",
    backgroundColor: "transparent",
    border: "none",
    display: "flex",
    justifyContent: "center",
  },
  overlay: {
    top: "0%",
    left: "0%",
    right: "0",
    bottom: "0",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
};
//scroll to library takes care of page moving from one section to another
//modal only close if 'openModal' is false
const App = () => {
  const rootStore = useContext(RootStoreContext);
  const { openModal } = rootStore.modalStore;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doo Holdings Group | Build Your Financial Enterprise</title>
        <link rel="dev" href="#" />
      </Helmet>
      <DisclaimerModal
        style={ModalLayout}
        isOpen={openModal}
        ariaHideApp={false}
      >
        <Disclaimer />
      </DisclaimerModal>
      <NavbarWrapper>
        <NavbarContentWrapper>
          <NavbarLogoWrapper>
            <img src={NavbarLogo} alt="doo-holding-logo" />
          </NavbarLogoWrapper>
          <NavbarNavWrapper>
            <NavbarNavItem>
              <ScrollTo selector={"#home"}>
                <NavbarText>Home</NavbarText>
              </ScrollTo>
            </NavbarNavItem>
            <NavbarNavItem>
              <ScrollTo selector={"#brands"}>
                <NavbarText>Brands</NavbarText>
              </ScrollTo>
            </NavbarNavItem>
            <NavbarNavItem>
              <ScrollTo selector={"#core"}>
                <NavbarText>Values</NavbarText>
              </ScrollTo>
            </NavbarNavItem>
            <NavbarNavItem>
              <ScrollTo selector={"#global"}>
                <NavbarText>Offices</NavbarText>
              </ScrollTo>
            </NavbarNavItem>
            <NavbarNavItem>
              <ScrollTo selector={"#contact"}>
                <NavbarText>Contact us</NavbarText>
              </ScrollTo>
            </NavbarNavItem>
          </NavbarNavWrapper>
        </NavbarContentWrapper>
      </NavbarWrapper>
      <div id="home">
        <Home />
      </div>
      <div id="brands">
        <Brands />
      </div>
      <div id="core">
        <CoreValues />
      </div>
      <div id="global">
        <GlobalOffices />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default observer(App);
