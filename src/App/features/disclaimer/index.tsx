import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { RootStoreContext } from "../../store/rootStore";
import { observer } from "mobx-react-lite";
import { styledSystemC } from "../../utils/StyledSystem";

interface IStyle {
  shading?: boolean;
  language?: boolean;
  header?: boolean;
  description?: boolean;
  active?: boolean;
  agreeButton?: boolean;
  nextPage?: boolean;
}
const DisclaimerLayout = styled.div`
  width: 62rem;
  height: 68.6rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.disclaimer.bgColor};
  font-family: ${({ theme }) => theme.disclaimer.fontFamily};
  ${(props: IStyle) =>
    props.nextPage &&
    css`
      margin-top: 16rem;
      width: 62rem;
      height: 34.8rem;
    `}
`;

const DisclaimerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.4rem 4rem 3.2rem 2.4rem;
  ${(props: IStyle) =>
    props.nextPage &&
    css`
      background-color: rgba(47, 51, 50, 0.1);
    `}
`;
const DisclaimerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.4rem;
  padding-bottom: 2.4rem;
  ${(props: IStyle) =>
    props.nextPage &&
    css`
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      height: 26.4rem;
    `}
`;

const DisclaimerScrollContent = styled.div`
  max-height: 32vh;
  overflow-y: auto;
  margin-right: 0.3rem;
  margin-bottom: 1.6rem;
`;

const DisclaimerCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 4.5rem;
`;
const DisclaimerCheckbox = styled.div`
  height: 1.4rem;
  width: 1.4rem;
  border: 0.1rem solid #666;
  font-size: 1.4rem;
  border-radius: 0.3rem;
  ${(props: IStyle) =>
    props.active &&
    css`
      border: 0.1rem solid ${({ theme }) => theme.disclaimer.redButton};
      color: ${({ theme }) => theme.disclaimer.redButton};
      &:after {
        content: "";
        position: absolute;
        margin-left: 0.5rem;
        margin-top: -0.1rem;
        height: 1.6rem;
        width: 0.1rem;
        transform: rotate(45deg);
        background-color: ${({ theme }) => theme.disclaimer.redButton};
      }
    `}
`;

const DisclaimerButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DisclaimerButtonCSS = styled.button`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  border: none;
  padding: 1rem;
  width: 10rem;
  background-color: ${({ theme }) => theme.disclaimer.whiteButton};
  color: ${({ theme }) => theme.disclaimer.gray};
  &:hover {
    background-color: ${({ theme }) => theme.disclaimer.whiteButtonHover};
  }
  ${(props: IStyle) =>
    props.agreeButton &&
    css`
      background-color: ${({ theme }) => theme.disclaimer.redButton};
      color: ${({ theme }) => theme.colors.white};
      &:hover {
        background-color: ${({ theme }) => theme.disclaimer.redButtonHover};
      }
    `}
`;

const DisclaimerButton = styledSystemC(DisclaimerButtonCSS);

const DisclaimerLogoWrapperCSS = styled.div`
  ${(props: IStyle) =>
    props.shading &&
    css`
      opacity: 0.1;
    `}
`;
const DisclaimerLogoWrapper = styledSystemC(DisclaimerLogoWrapperCSS);

const DisclaimerTextCSS = styled.div`
  ${(props: IStyle) =>
    props.language &&
    css`
      font-size: ${({ theme }) => theme.disclaimer.fontLanguage};
      color: ${({ theme }) => theme.disclaimer.descriptionColor};
    `}
    ${(props: IStyle) =>
      props.header &&
      css`
        font-size: ${({ theme }) => theme.disclaimer.fontHeader};
        color: ${({ theme }) => theme.disclaimer.headerColor};
        margin-bottom: 1.6rem;
        font-weight: 700;
      `}
    ${(props: IStyle) =>
      props.description &&
      css`
        font-size: ${({ theme }) => theme.disclaimer.descriptionFont};
        color: ${({ theme }) => theme.disclaimer.descriptionColor};
        margin-bottom: 1.6rem;
        padding-right: 3.1rem;
      `}
`;

const DisclaimerText = styledSystemC(DisclaimerTextCSS);

const Disclaimer = () => {
  const rootStore = useContext(RootStoreContext);
  const { setOpenModal } = rootStore.modalStore;
  const [checkbox, setCheckbox] = useState(false);
  const [disagreePage, setDisagreePage] = useState(false);
  const HandleCheckbox = (check: boolean) => {
    setCheckbox(check);
  };
  const HandleCloseModal = () => {
    setOpenModal(false);
  };
  const HandleDisagree = (agree: boolean) => {
    setDisagreePage(agree);
  };
  return (
    <>
      {!disagreePage ? (
        <DisclaimerLayout>
          <DisclaimerHeader>
            <DisclaimerLogoWrapper shading mt="-1.5rem" ml="-1.3rem">
              <img
                style={{ width: "75%" }}
                src="https://www.doo.hk/static/media/doo-holding-icon.2b38d653.svg"
                alt="modal-logo"
              />
            </DisclaimerLogoWrapper>
            <DisclaimerLogoWrapper ml="-3rem">
              <img
                src="https://www.doo.hk/static/media/doo-holding-logo.51675ae2.svg"
                alt="modal-middle-logo"
              />
            </DisclaimerLogoWrapper>
            <DisclaimerText language mt=".2rem">
              English
            </DisclaimerText>
          </DisclaimerHeader>
          <DisclaimerContent>
            <DisclaimerText header>Disclaimer</DisclaimerText>
            <DisclaimerScrollContent>
              <ul>
                <li>
                  <DisclaimerText description>
                    Please note that any comments, statements or data provided
                    in this website is only for reference purposes only.
                  </DisclaimerText>
                  <DisclaimerText description>
                    The posted documents and information published on this
                    website are only directed at and intended for customers of
                    this website.
                  </DisclaimerText>
                  <DisclaimerText description>
                    There may be local laws and regulations which prohibit or
                    limit your rights to access, download, distribute,
                    disseminate, share or otherwise use any or all of the
                    documents and information published on this website.
                  </DisclaimerText>
                  <DisclaimerText description>
                    The documents and information published on this website must
                    not access, use, rely or acted upon by any person regardless
                    of his/her nationality, residence, registration and
                    jurisdiction without the permission of laws and regulations.
                    Documents and information posted on this website cannot be
                    used for publicity, promotion, marketing activities or any
                    commitment or offer to any party.
                  </DisclaimerText>
                  <DisclaimerText description>
                    We further specifically disclaim and accept no liability or
                    responsibility whatsoever for the access, downloading,
                    distribution, dissemination, sharing or other use of any
                    materials by or to individuals or entities.
                  </DisclaimerText>
                  <DisclaimerText description>
                    We fully comply with all applicable laws and regulations in
                    jurisdictions. It is your responsibility to determine and
                    ensure that your investment meets your requirements, and you
                    will bear all the consequences of your investment.
                  </DisclaimerText>
                  <DisclaimerText description>
                    We do not provide products and services to the residents in
                    United States, Japan, Cayman Islands, Hong Kong, Malaysia,
                    and Taiwan.
                  </DisclaimerText>
                  <DisclaimerText description>
                    Visitors from the above regions or other regions should
                    confirm whether your decision to invest using Doo Holding
                    are in accordance with laws and regulations in your country
                    of residence before you use Doo Holding and its related
                    services. We reserve our rights to discontinue or to decline
                    to provide our services and products to any party at any
                    time.
                  </DisclaimerText>
                  <DisclaimerText description>
                    If you require any further information, please refer to
                    related documents available on our website.
                  </DisclaimerText>
                  <DisclaimerText description>
                    This website uses 'cookies' to give you the best, most
                    relevant experience. Using this website means you are agreed
                    with this.
                  </DisclaimerText>
                </li>
              </ul>
            </DisclaimerScrollContent>
            <DisclaimerCheckBoxWrapper>
              <DisclaimerCheckbox active={checkbox} />
              <div
                style={{
                  height: "2rem",
                  cursor: "pointer",
                }}
              >
                <DisclaimerText
                  w
                  description
                  ml="1rem"
                  mt="-.3rem"
                  onClick={() => HandleCheckbox(!checkbox)}
                >
                  Do not show this disclaimer for the day.
                </DisclaimerText>
              </div>
            </DisclaimerCheckBoxWrapper>
            <DisclaimerButtonWrapper>
              <div></div>
              <div style={{ marginRight: "-8rem" }}>
                <DisclaimerButton
                  agreeButton
                  mr="4rem"
                  onClick={() => HandleCloseModal()}
                >
                  <DisclaimerText>Agree</DisclaimerText>
                </DisclaimerButton>
                <DisclaimerButton onClick={() => HandleDisagree(true)}>
                  <DisclaimerText>Disagree</DisclaimerText>
                </DisclaimerButton>
              </div>
              <DisclaimerLogoWrapper shading mr="3.5rem">
                <img
                  style={{ height: "125%" }}
                  src="https://www.doo.hk/static/media/doo-holding-icon.2b38d653.svg"
                  alt="bottom-logo"
                />
              </DisclaimerLogoWrapper>
            </DisclaimerButtonWrapper>
          </DisclaimerContent>
        </DisclaimerLayout>
      ) : (
        <DisclaimerLayout nextPage={disagreePage}>
          <DisclaimerHeader nextPage={disagreePage}>
            <DisclaimerLogoWrapper shading mt="-1.5rem" ml="-1.3rem">
              <img
                style={{ width: "75%" }}
                src="https://www.doo.hk/static/media/doo-holding-icon.2b38d653.svg"
                alt="modal-logo"
              />
            </DisclaimerLogoWrapper>
            <DisclaimerLogoWrapper ml="-3rem">
              <img
                src="https://www.doo.hk/static/media/doo-holding-logo.51675ae2.svg"
                alt="modal-middle-logo"
              />
            </DisclaimerLogoWrapper>
            <DisclaimerText language mt=".2rem">
              English
            </DisclaimerText>
          </DisclaimerHeader>
          <DisclaimerContent nextPage={disagreePage}>
            <DisclaimerText description mt="1rem" fontSize="1.6rem">
              Please close this site manually.
            </DisclaimerText>
            <DisclaimerButtonWrapper>
              <div></div>
              <DisclaimerButton
                agreeButton
                mr="-8rem"
                onClick={() => HandleDisagree(false)}
              >
                <DisclaimerText>Go back</DisclaimerText>
              </DisclaimerButton>

              <DisclaimerLogoWrapper shading mr="3.5rem">
                <img
                  style={{ height: "125%" }}
                  src="https://www.doo.hk/static/media/doo-holding-icon.2b38d653.svg"
                  alt="bottom-logo"
                />
              </DisclaimerLogoWrapper>
            </DisclaimerButtonWrapper>
          </DisclaimerContent>
        </DisclaimerLayout>
      )}
    </>
  );
};

export default observer(Disclaimer);
