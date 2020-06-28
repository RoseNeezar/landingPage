/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from "react";
import styled from "styled-components";

//check if hover then show 1st child and translate second child
const ListLayout = styled.div`
  border-right: 0.1px solid hsla(0, 0%, 100%, 0.16);
  &:hover > :nth-child(1) {
    opacity: 1;
  }
  &:hover > :nth-child(2) {
    transform: translate(0, 0);
  }
`;

const ListText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.75;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const ListOverlay = styled.div`
  height: 89.3rem;
  opacity: 0;
  transition: all 0.5s ease;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -89rem;
  height: 100%;
  padding: 24rem 10% 2.4rem;
  transform: translate(0, 58.3rem);
  transition: all 0.3s ease;
`;

const ListFigureContainer = styled.figure``;

const ListDescriptionContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 2.4rem;
  display: flex;
  flex: 1 0;
`;

const ListLinkContainer = styled.a`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  margin-top: 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

interface IBrands {
  id: number;
  text: string;
  mainImage: string;
  bgImage: string;
  linkSite: string;
}

const BrandsItem: FC<IBrands> = ({ text, mainImage, bgImage, linkSite }) => {
  return (
    <ListLayout>
      <ListOverlay
        style={{
          background: `url(${bgImage})center center / cover no-repeat scroll transparent`,
        }}
      />
      <ListContainer>
        <ListFigureContainer>
          <img style={{ maxWidth: "100%" }} src={mainImage} alt="main-image" />
        </ListFigureContainer>
        <ListDescriptionContainer>
          <ListText>{text}</ListText>
        </ListDescriptionContainer>
        <hr />
        <ListLinkContainer
          href={linkSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more {">"}
        </ListLinkContainer>
      </ListContainer>
    </ListLayout>
  );
};

export default BrandsItem;
