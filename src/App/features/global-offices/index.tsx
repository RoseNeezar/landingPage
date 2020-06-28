/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled, { css } from "styled-components";
import { styledSystemC } from "../../utils/StyledSystem";
import ReactTooltip from "react-tooltip";

interface IStyle {
  header?: boolean;
  tooltip?: boolean;
  tooltipContent?: boolean;
  london?: boolean;
  georgetown?: boolean;
  roadtown?: boolean;
  hongkong?: boolean;
  taipei?: boolean;
  kl?: boolean;
}
const GlobalLayout = styled.section``;

const GlobalContainer = styled.div`
  max-width: 130rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 3.2rem;
`;
const GlobalHeader = styled.div`
  padding: 7.2rem;
  text-align: center;
`;
const GlobalMap = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 11.6rem;
`;
const GlobalMarker = styled.div`
  position: absolute;
  ${(props: IStyle) =>
    props.london &&
    css`
      left: 41.7%;
      top: 20%;
    `}
    ${(props: IStyle) =>
      props.georgetown &&
      css`
        left: 16%;
        top: 44%;
      `}
    ${(props: IStyle) =>
      props.roadtown &&
      css`
        left: 19.3%;
        top: 48.3%;
      `}
    ${(props: IStyle) =>
      props.hongkong &&
      css`
        left: 68.8%;
        top: 35%;
      `}
    ${(props: IStyle) =>
      props.taipei &&
      css`
        left: 73.8%;
        top: 44%;
      `}
    ${(props: IStyle) =>
      props.kl &&
      css`
        left: 65%;
        top: 55%;
      `}
`;
const GlobalTextCSS = styled.div`
  ${(props: IStyle) =>
    props.header &&
    css`
      font-family: ${({ theme }) => theme.fontFamilyHeader};
      font-size: ${({ theme }) => theme.globalOffice.headerFont};
      color: ${({ theme }) => theme.globalOffice.headerColor};
    `}
  ${(props: IStyle) =>
    props.tooltip &&
    css`
      font-size: ${({ theme }) => theme.fontSize.normal};
      color: ${({ theme }) => theme.colors.black};
    `}
    ${(props: IStyle) =>
      props.tooltipContent &&
      css`
        font-size: ${({ theme }) => theme.fontSize.normal};
        color: ${({ theme }) => theme.globalOffice.tooltipColor};
      `}
`;
const GlobalText = styledSystemC(GlobalTextCSS);

const GlobalRedDot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.globalOffice.red};
  margin-left: 0.5rem;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    opacity: 0.1;
    margin-left: -0.4rem;
    margin-top: -0.4rem;
    background-color: ${({ theme }) => theme.globalOffice.red};
    border-radius: 50%;
  }
`;

const GlobalOffices = () => {
  return (
    <GlobalLayout>
      <GlobalContainer>
        <GlobalHeader>
          <GlobalText header>Global Offices</GlobalText>
        </GlobalHeader>
        <GlobalMap>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://www.doo.hk/static/media/map.b2311ec9.svg"
            alt="global-map"
          />
          <GlobalMarker london>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              data-tip
              data-for="london"
            >
              <GlobalText tooltip>London</GlobalText>
              <GlobalRedDot />
            </a>
            <ReactTooltip
              border={true}
              borderColor="rgba(0,0,0,.12)"
              effect="solid"
              id="london"
              aria-haspopup="true"
              place="right"
              type="light"
            >
              <div style={{ textAlign: "start" }}>
                <GlobalText tooltipContent>
                  Ground Floor, Birchin Court,
                </GlobalText>
                <GlobalText tooltipContent>
                  20 Birchin Lane,City of London,
                </GlobalText>
                <GlobalText tooltipContent>London, EC3V 9DU, UK</GlobalText>
              </div>
            </ReactTooltip>
          </GlobalMarker>
          <GlobalMarker georgetown>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              data-tip
              data-for="georgetown"
            >
              <GlobalText tooltip>George Town</GlobalText>
              <GlobalRedDot />
            </a>
            <ReactTooltip
              border={true}
              borderColor="rgba(0,0,0,.12)"
              effect="solid"
              id="georgetown"
              aria-haspopup="true"
              place="right"
              type="light"
            >
              <div style={{ textAlign: "start" }}>
                <GlobalText tooltipContent>
                  Governors Square, 23 Lime,
                </GlobalText>
                <GlobalText tooltipContent>
                  Tree Bay Avenue, George Town,
                </GlobalText>
                <GlobalText tooltipContent>KY1-1104, Cayman Islands</GlobalText>
              </div>
            </ReactTooltip>
          </GlobalMarker>
          <GlobalMarker roadtown>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              data-tip
              data-for="roadtown"
            >
              <GlobalText tooltip>Road Town</GlobalText>
              <GlobalRedDot />
            </a>
            <ReactTooltip
              border={true}
              borderColor="rgba(0,0,0,.12)"
              effect="solid"
              id="roadtown"
              aria-haspopup="true"
              place="right"
              type="light"
            >
              <div style={{ textAlign: "start" }}>
                <GlobalText tooltipContent>NovaSage Chambers,</GlobalText>
                <GlobalText tooltipContent>Wickham’s Cay II, Road</GlobalText>
                <GlobalText tooltipContent>
                  Town, British Virgin Islands
                </GlobalText>
              </div>
            </ReactTooltip>
          </GlobalMarker>
          <GlobalMarker hongkong>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              data-tip
              data-for="hongkong"
            >
              <GlobalText tooltip>Hong Kong</GlobalText>
              <GlobalRedDot />
            </a>
            <ReactTooltip
              border={true}
              borderColor="rgba(0,0,0,.12)"
              effect="solid"
              id="hongkong"
              aria-haspopup="true"
              place="right"
              type="light"
            >
              <div style={{ textAlign: "start" }}>
                <GlobalText tooltipContent>
                  25/F, Tower B, Billion Centre, No. 1
                </GlobalText>
                <GlobalText tooltipContent>Wang Kwong Road, Kowloon</GlobalText>
                <GlobalText tooltipContent>Hong Kong</GlobalText>
              </div>
            </ReactTooltip>
          </GlobalMarker>
          <GlobalMarker taipei>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              data-tip
              data-for="taipei"
            >
              <GlobalText tooltip>Taipei</GlobalText>
              <GlobalRedDot />
            </a>
            <ReactTooltip
              border={true}
              borderColor="rgba(0,0,0,.12)"
              effect="solid"
              id="taipei"
              aria-haspopup="true"
              place="right"
              type="light"
            >
              <div style={{ textAlign: "start" }}>
                <GlobalText tooltipContent>
                  7/F, No.2-1, Wenhu Street,
                </GlobalText>
                <GlobalText tooltipContent>Neihu District,Taipei</GlobalText>
              </div>
            </ReactTooltip>
          </GlobalMarker>
          <GlobalMarker kl>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              data-tip
              data-for="kl"
            >
              <GlobalText tooltip>Kuala Lumpur</GlobalText>
              <GlobalRedDot />
            </a>
            <ReactTooltip
              border={true}
              borderColor="rgba(0,0,0,.12)"
              effect="solid"
              id="kl"
              aria-haspopup="true"
              place="right"
              type="light"
            >
              <div style={{ textAlign: "start" }}>
                <GlobalText tooltipContent>
                  23/F, The Vertical Business
                </GlobalText>
                <GlobalText tooltipContent>
                  Suite, 8 Jalan Kerinchi, Bangsar
                </GlobalText>
                <GlobalText tooltipContent>
                  South, Kuala Lumpur, Malaysia
                </GlobalText>
              </div>
            </ReactTooltip>
          </GlobalMarker>
        </GlobalMap>
      </GlobalContainer>
    </GlobalLayout>
  );
};

export default GlobalOffices;
