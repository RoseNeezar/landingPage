/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import styled, { css } from "styled-components";
import { styledSystemC } from "../../utils/StyledSystem";
import { LogoList, DescriptionList } from "../../data/data";
import ContactLogoList from "./ContactLogoList";
import ContactDescriptionList from "./ContactDescriptionList";

interface IStyle {
  aboutUs?: boolean;
  supportHeader?: boolean;
  supportHeaderContent?: boolean;
}
const ContactLayout = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 4.2rem 0 5.5rem;
`;
const ContactContainer = styled.div`
  max-width: 130rem;
  padding: 0 3.2rem;
  height: 100%;
  margin: 0 auto;
`;
const ContactHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 7.2rem;
`;
const ContactAboutUs = styled.div`
  max-width: 20%;
  margin-right: auto;
`;
const ContactSupportContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3.2rem;
`;
const ContactSupportContent = styled.div``;
const ContactFigure = styled.figure``;
//multiple type of text
const ContactTextCSS = styled.div`
  ${(props: IStyle) =>
    props.aboutUs &&
    css`
      font-size: ${({ theme }) => theme.contactUs.fontContent1};
      color: ${({ theme }) => theme.contactUs.headerColor};
    `}
  ${(props: IStyle) =>
    props.supportHeader &&
    css`
      font-size: ${({ theme }) => theme.contactUs.fontHeader};
      color: ${({ theme }) => theme.contactUs.color};
    `}
    ${(props: IStyle) =>
      props.supportHeaderContent &&
      css`
        font-size: ${({ theme }) => theme.contactUs.fontContent1};
        color: ${({ theme }) => theme.contactUs.headerColor};
        @media ${({ theme }) => theme.breakpoints.tablet} {
          font-size: ${({ theme }) => theme.contactUs.fontContent2};
        }
      `}
`;
const ContactText = styledSystemC(ContactTextCSS);

const ContactLinksCSS = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.contactUs.fontContent1};
  color: ${({ theme }) => theme.contactUs.headerColor};
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.contactUs.fontContent2};
  }
`;
const ContactLinks = styledSystemC(ContactLinksCSS);

const ContactLogoListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3.2rem;
  height: 100%;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ContactDescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3.2rem;
`;

const Contact = () => {
  return (
    <ContactLayout>
      <ContactContainer>
        <ContactHeader>
          <ContactAboutUs>
            <ContactFigure>
              <img
                src="https://www.doo.hk/static/media/Logo.5f11e46d.svg"
                alt="footer-header-logo"
              />
            </ContactFigure>
            <ContactText aboutUs margin="1.6rem 0 1.84rem">
              Brings Global Financial Execution to the Next Level.
            </ContactText>
            <ContactText aboutUs margin="1.6rem 0 1.84rem">
              © 2020 All Rights Reserved
            </ContactText>
          </ContactAboutUs>
          <ContactSupportContainer>
            <ContactSupportContent>
              <ContactText supportHeader mb="1.4rem">
                Follow Us
              </ContactText>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ marginTop: ".1rem" }}>
                    <img
                      src="https://www.doo.hk/static/media/facebook.11a4028f.svg"
                      alt="facebook-footer"
                    />
                  </div>
                  <ContactLinks
                    ml=".5rem"
                    href="https://www.facebook.com/Doo-Clearing-Global-100781638129605"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </ContactLinks>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ marginTop: ".1rem" }}>
                    <img
                      src="https://www.doo.hk/static/media/twitter.7140220d.svg"
                      alt="twitter-footer"
                    />
                  </div>
                  <ContactLinks
                    ml=".5rem"
                    href="https://twitter.com/DooClearing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </ContactLinks>
                </li>
                <li style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ marginTop: ".1rem" }}>
                    <img
                      src="https://www.doo.hk/static/media/linkedIn.f7cd96ba.svg"
                      alt="linkendin-footer"
                    />
                  </div>
                  <ContactLinks
                    ml=".5rem"
                    href="https://www.linkedin.com/company/doo-holding-group-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </ContactLinks>
                </li>
              </ul>
            </ContactSupportContent>
            <ContactSupportContent>
              <ContactText supportHeader mb="1.4rem">
                Contact us
              </ContactText>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <ContactText supportHeaderContent mb="1rem">
                    support@doo.hk
                  </ContactText>
                </li>
                <li>
                  <ContactText supportHeaderContent>+852 5641 1906</ContactText>
                </li>
              </ul>
            </ContactSupportContent>
          </ContactSupportContainer>
        </ContactHeader>
        <ContactLogoListWrapper>
          {LogoList.map((res) => {
            return (
              <ContactLogoList
                key={res.id}
                id={res.id}
                logoUrl={res.url}
                logoUrlHover={res.urlHover}
              />
            );
          })}
        </ContactLogoListWrapper>
        <hr />
        <ContactDescriptionWrapper>
          {DescriptionList.map((res) => {
            return <ContactDescriptionList key={res.id} data={res} />;
          })}
        </ContactDescriptionWrapper>
      </ContactContainer>
    </ContactLayout>
  );
};

export default Contact;
