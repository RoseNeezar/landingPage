import React from "react";
import styled, { css } from "styled-components";
import { styledSystemC } from "../../utils/StyledSystem";

interface IStyle {
  header1?: boolean;
  header2?: boolean;
  description?: boolean;
}
const HomeLayout = styled.section`
  background: #000 url(https://www.doo.hk/static/media/1.775145e5.png) no-repeat
    scroll 50% / cover;
  display: flex;
  justify-content: center;
  min-height: 71rem;
  margin: 0 auto;
`;
const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  max-width: 130rem;
  /* background-color: green; */
`;
const HomeWrapper = styled.div`
  /* background-color: purple; */
  width: 68%;
  padding: 18rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const HomeTextCSS = styled.div`
  font-family: ${({ theme }) => theme.fontFamilyHeader};
    ${(props: IStyle) =>
      props.header1 &&
      css`
        font-size: ${({ theme }) => theme.home.headerFont1};
        color: ${({ theme }) => theme.home.headerColor1};
      `}
    ${(props: IStyle) =>
      props.header2 &&
      css`
        font-size: ${({ theme }) => theme.home.headerFont2};
        color: ${({ theme }) => theme.home.headerColor2};
        line-height: 1.22;
      `}
    ${(props: IStyle) =>
      props.description &&
      css`
        font-size: ${({ theme }) => theme.home.headerFont3};
        color: ${({ theme }) => theme.home.headerColor3};
      `};
`;

const HomeText = styledSystemC(HomeTextCSS);

const Home = () => {
  return (
    <HomeLayout>
      <HomeContainer>
        <HomeWrapper>
          <HomeText header1>Build Your Financial Enterprise</HomeText>
          <HomeText header2 p="2rem 0">
            Build Your Financial Execution to the Next Level
          </HomeText>
          <HomeText description>
            Doo Holding Group was officially incorporated in Hong Kong since
            2014, a financial services group with cutting-edge technology and
            solutions. Doo Holdings is globally located and branches in Hong
            Kong, London, Taiwan, Kuala Lumpur, managing the brands of Doo
            Holding, Doo Tech, Doo Prime, Doo Clearing, Doo Cloud, Doo Exchange,
            Doo Intelligence and Doo Consulting.
          </HomeText>
        </HomeWrapper>
      </HomeContainer>
    </HomeLayout>
  );
};

export default Home;
