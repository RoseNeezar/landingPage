import React, { FC } from "react";
import styled from "styled-components";

const ListLayout = styled.div`
  border-right: 0.1px solid #fff;
`;
interface IBrands {
  id: number;
  text: string;
  mainImage: string;
  bgImage: string;
}
const BrandsItem: FC<IBrands> = ({ text, mainImage, bgImage }) => {
  return (
    <ListLayout>
      <div style={{ color: "#fff" }}>{text}</div>
      <img src={mainImage} alt="main-image" />
      <img src={bgImage} alt="bg-image" />
    </ListLayout>
  );
};

export default BrandsItem;
