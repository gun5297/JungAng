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
  .admin-nav{
    position: fixed;
    right: 30px;
    top: 100px;
    width: 200px;
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.7;
    z-index: 9999999;
    &:hover{
      opacity: 1;
    }
  }
  .admin-bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.4);
    z-index: 999999;
    p{
      font-size: 40px;
      color: #fafafa;
      z-index: 99999;
    }
  }
`;

export default GlobalStyle;
