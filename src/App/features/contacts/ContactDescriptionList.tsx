import React, { FC } from "react";
import styled, { css } from "styled-components";
import { IContactDescription } from "../../model/contactModel";

interface IStyle {
  listTitle?: boolean;
  desc?: boolean;
}
const ListHeaderWrapper = styled.div`
  margin-top: 4.1rem;
`;
const ListDescriptionWrapper = styled.div`
  margin-top: 1.4rem;
`;
const ListLinkWrapper = styled.div`
  margin-top: 1.8rem;
`;
const ListText = styled.div`
  font-size: ${({ theme }) => theme.contactUs.fontContent2};
  ${(props: IStyle) =>
    props.listTitle &&
    css`
      color: ${({ theme }) => theme.contactUs.color};
    `}
  ${(props: IStyle) =>
    props.desc &&
    css`
      color: ${({ theme }) => theme.contactUs.color2};
    `}
`;
const ListLink = styled.a`
  font-size: ${({ theme }) => theme.contactUs.fontContent2};
  text-decoration: none;
  color: ${({ theme }) => theme.contactUs.red};
`;
//data follow model
interface IList {
  data: IContactDescription;
}

const ContactDescriptionList: FC<IList> = ({ data }) => {
  return (
    <div>
      <ListHeaderWrapper>
        <ListText listTitle>{data.title}</ListText>
      </ListHeaderWrapper>
      <ListDescriptionWrapper>
        <ListText desc>{data.description}</ListText>
      </ListDescriptionWrapper>
      {data.moreDescription && (
        <ListDescriptionWrapper>
          <ListText desc>{data.moreDescription}</ListText>
        </ListDescriptionWrapper>
      )}
      <ListLinkWrapper>
        <ListLink href={data.link} target="_blank" rel="noopener noreferrer">
          {data.linkName}
        </ListLink>
      </ListLinkWrapper>
    </div>
  );
};

export default ContactDescriptionList;
