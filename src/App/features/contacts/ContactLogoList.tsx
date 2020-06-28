import React, { FC } from "react";
import styled from "styled-components";
import Hoverable from "../../utils/hover/Hoverable";

const ListFigure = styled.div`
  padding: 2rem 0;
  text-align: center;
  cursor: pointer;
`;
const ListLink = styled.a`
  text-decoration: none;
`;
interface ILogoList {
  id: number;
  logoUrl: string;
  logoUrlHover: string;
}

const ContactLogoList: FC<ILogoList> = ({ logoUrl, logoUrlHover }) => {
  return (
    <ListFigure>
      <ListLink>
        <Hoverable>
          {(isHover: any) =>
            !isHover ? (
              <img
                style={{ maxWidth: "100%" }}
                src={logoUrl}
                alt="logo-footer"
              />
            ) : (
              <img src={logoUrlHover} alt="logo-footer-hover" />
            )
          }
        </Hoverable>
      </ListLink>
    </ListFigure>
  );
};

export default ContactLogoList;
