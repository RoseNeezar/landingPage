import React from "react";
import styled from "styled-components";

const BrandsLayout = styled.section`
  background: #000 url(https://www.doo.hk/static/media/2.88a1e856.png) no-repeat
    scroll 50% / cover;
  display: flex;
  justify-content: center;
  height: 89.3rem;
  border: none !important;
`;

const Brands = () => {
  return <BrandsLayout>Brands</BrandsLayout>;
};

export default Brands;
