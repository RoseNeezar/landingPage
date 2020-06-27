/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from "react";
import styled, { css } from "styled-components";
import Hoverable from "../../utils/hover/Hoverable";

interface IStyle {
  isHovering?: boolean;
}

const ListLayout = styled.div`
  border-right: 0.1px solid hsla(0, 0%, 100%, 0.16);
`;

const ListText = styled.div`
  font-size: ${({ theme }) => theme.brands.fontContent};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.75;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24rem 10% 2.4rem;
  transform: translate(0, 58.3rem);
  transition: all 0.3s ease;
  ${(props: IStyle) =>
    props.isHovering &&
    css`
      transform: translate(0, 0);
    `};
  z-index: 20;
  position: relative;
`;
const ListFigureContainer = styled.figure``;

const ListDescriptionContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 2.4rem;
`;

interface IBrands {
  id: number;
  text: string;
  mainImage: string;
  bgImage: string;
}

const BrandsItem: FC<IBrands> = ({ text, mainImage, bgImage }) => {
  return (
    <Hoverable>
      {(isHover: any) => (
        <ListLayout
          style={
            isHover
              ? {
                  background: `url(${bgImage})center center / cover no-repeat scroll transparent`,
                }
              : undefined
          }
        >
          <ListContainer isHovering={isHover ? true : false}>
            <ListFigureContainer>
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                src={mainImage}
                alt="main-image"
              />
            </ListFigureContainer>
            <ListDescriptionContainer>
              <ListText>{text}</ListText>
            </ListDescriptionContainer>
          </ListContainer>
        </ListLayout>
      )}
    </Hoverable>
  );
};

export default BrandsItem;
