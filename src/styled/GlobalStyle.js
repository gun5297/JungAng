import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --main-color:#3E2723;
  }
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: "Noto Sans KR";    
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
  input{
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
