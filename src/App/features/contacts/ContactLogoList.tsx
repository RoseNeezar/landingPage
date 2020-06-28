import React, { FC, useState } from "react";
import styled from "styled-components";

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
//check if hover change image
const ContactLogoList: FC<ILogoList> = ({ logoUrl, logoUrlHover }) => {
  const [hover, setHover] = useState(false);

  return (
    <ListFigure
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ListLink>
        {!hover ? (
          <img style={{ maxWidth: "100%" }} src={logoUrl} alt="logo-footer" />
        ) : (
          <img
            style={{ maxWidth: "100%" }}
            src={logoUrlHover}
            alt="logo-footer-hover"
          />
        )}
      </ListLink>
    </ListFigure>
  );
};

export default ContactLogoList;
