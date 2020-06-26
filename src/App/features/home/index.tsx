import React from "react";
import styled, { css } from "styled-components";

interface IStyle {
  header1?: boolean;
  header2?: boolean;
  content?: boolean;
}
const HomeLayout = styled.section`
  /* #000 url(/static/media/1.775145e5.png) no-repeat scroll 50%/cover */
  background: #000 url("./../../images/homeBG.png") no-repeat scroll 50% cover;
`;
const HomeContainer = styled.div``;
const HomeWrapper = styled.div``;
const HomeText = styled.div`
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
    `}
  ${(props: IStyle) =>
    props.content &&
    css`
      font-size: ${({ theme }) => theme.home.headerFont3};
      color: ${({ theme }) => theme.home.headerColor3};
    `}
`;

const Home = () => {
  return <div></div>;
};

export default Home;
