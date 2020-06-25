import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
   ${({ theme }) => css`
     *,
     *::after,
     *::before {
       margin: 0;
       padding: 0;
       box-sizing: inherit;
     }
     html {
       font-size: 62.5%;
     }
     body {
       box-sizing: border-box;
       font-family: ${theme.fontFamily};
       background-color: ${theme.colors.black};
     }
   `}
`;
