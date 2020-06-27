import React, { FC } from "react";
import styled from "styled-components";
import { BrandList } from "../../data/data";
import BrandsItem from "./BrandsItem";

const BrandsLayout = styled.section`
  background: #000 url(https://www.doo.hk/static/media/2.88a1e856.png) no-repeat
    scroll 50% / cover;
  display: flex;
  justify-content: center;
  height: 89.3rem;
  overflow-y: hidden;
`;
const BrandsContainer = styled.div`
  height: 100%;
  max-width: 130rem;
  /* background-color: greenyellow; */
  padding: 0 2rem;
`;
const BrandsTextHeader = styled.div`
  font-size: ${({ theme }) => theme.brands.fontHeader};
  margin-top: 4.5rem;
  color: ${({ theme }) => theme.brands.headerColor};
`;
const BrandsItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  border-left: 0.1px solid #fff;
`;

const Brands: FC = () => {
  return (
    <BrandsLayout>
      <BrandsContainer>
        <BrandsTextHeader>Our Brands</BrandsTextHeader>
        <BrandsItemContainer>
          {BrandList.map((res) => {
            return (
              <BrandsItem
                key={res.id}
                id={res.id}
                text={res.text}
                mainImage={res.mainImage}
                bgImage={res.bgImage}
              />
            );
          })}
        </BrandsItemContainer>
      </BrandsContainer>
    </BrandsLayout>
  );
};

export default Brands;
