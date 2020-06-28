import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
   ${({ theme }) => css`
     *,
     *::after,
     *::before {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
     }
     html {
       font-size: 62.5%;
     }
     body {
       box-sizing: inherit;
       font-family: ${theme.fontFamily};
       background-color: ${theme.colors.white};
       -webkit-font-smoothing: antialiased;
       line-height: 1.5;
     }
   `}
`;
