import React from "react";
import styled, { css } from "styled-components";
import { styledSystemC } from "../../utils/StyledSystem";

interface IStyle {
  header1?: boolean;
  header2?: boolean;
  header3?: boolean;
  description?: boolean;
}
const CoreLayout = styled.section``;

const CoreContainer = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
  padding: 0 2rem;
`;
const CoreTextCSS = styled.div`
   ${(props: IStyle) =>
     props.header1 &&
     css`
       font-family: ${({ theme }) => theme.fontFamilyHeader};
       font-size: ${({ theme }) => theme.coreValues.headerFont};
       color: ${({ theme }) => theme.coreValues.headerColor};
     `}
    ${(props: IStyle) =>
      props.header2 &&
      css`
        font-size: ${({ theme }) => theme.coreValues.subHeaderFont};
        color: ${({ theme }) => theme.coreValues.subHeaderColor};
      `}
    ${(props: IStyle) =>
      props.header3 &&
      css`
        font-size: ${({ theme }) => theme.coreValues.subTitleFont};
        color: ${({ theme }) => theme.coreValues.subTitleColor};
      `};
      ${(props: IStyle) =>
        props.description &&
        css`
          font-size: ${({ theme }) => theme.coreValues.subTitleFont};
          color: ${({ theme }) => theme.coreValues.subContentColor};
        `};
`;
const CoreText = styledSystemC(CoreTextCSS);

const CoreHeader = styled.div`
  padding: 7.2rem 0;
  text-align: center;
`;

const CoreItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  grid-gap: 3.2rem;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`;

const CoreItemLeft = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 3.2rem;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 3fr 4fr;
  }
`;
const CoreItemLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const CoreItemLeftInnerContent = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  justify-content: space-between;
`;
const CoreItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CoreItemRightContent = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr;
`;
const CoreItemRightInnerContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const CoreFigures = styled.figure``;

const CoreValues = () => {
  return (
    <CoreLayout>
      <CoreContainer>
        <CoreHeader>
          <CoreText header1>Core Values</CoreText>
        </CoreHeader>
        <CoreItemContainer>
          <CoreItemLeft>
            <CoreFigures>
              <img
                src="https://www.doo.hk/static/media/3.052017c5.png"
                alt="core-logo1"
              />
            </CoreFigures>
            <CoreItemLeftContent>
              <CoreText header2 mb="2rem">
                Value
              </CoreText>
              <CoreItemLeftInnerContent>
                <CoreText header3 mt="2rem" mb="-1rem">
                  Outstanding
                </CoreText>
                <CoreText description>
                  We value skill, intelligent and hard-work in our team to
                  achieve the best possible result.
                </CoreText>
                <CoreText header3 mb="-1rem">
                  Multi-asset
                </CoreText>
                <CoreText description>
                  We value multiple-asset development to provide cost-effective
                  one stop solutions to our clients.
                </CoreText>
                <CoreText header3 mb="-1rem">
                  Integrity
                </CoreText>
                <CoreText description>
                  We hold strong corporate compliance culture; social
                  responsibility is at the core of our business.
                </CoreText>
              </CoreItemLeftInnerContent>
            </CoreItemLeftContent>
          </CoreItemLeft>
          <CoreItemRight>
            <CoreItemRightContent>
              <CoreFigures>
                <img
                  src="https://www.doo.hk/static/media/4.e60ded5e.png"
                  alt="core-logo2"
                />
              </CoreFigures>
              <CoreItemRightInnerContent>
                <CoreText header2 mb="1.25rem">
                  Mission
                </CoreText>
                <CoreText description fontSize="1.6rem">
                  Establishing a financial ecosystem network that empowers our
                  clients to stay one step ahead.
                </CoreText>
              </CoreItemRightInnerContent>
            </CoreItemRightContent>
            <CoreItemRightContent>
              <CoreFigures>
                <img
                  src="https://www.doo.hk/static/media/5.1ab11a11.png"
                  alt="core-logo3"
                />
              </CoreFigures>
              <CoreItemRightInnerContent>
                <CoreText header2 mb="1.25rem">
                  Vision
                </CoreText>
                <CoreText description fontSize="1.6rem">
                  Brings global financial execution to the next level.
                </CoreText>
              </CoreItemRightInnerContent>
            </CoreItemRightContent>
          </CoreItemRight>
        </CoreItemContainer>
      </CoreContainer>
    </CoreLayout>
  );
};

export default CoreValues;
