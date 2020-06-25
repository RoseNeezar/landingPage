import React from "react";
import styled from "styled-components";

const Header = styled.div`
  color: #fff;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fontFamilyHeader};
`;

const App = () => {
  return <Header>Hello</Header>;
};

export default App;
