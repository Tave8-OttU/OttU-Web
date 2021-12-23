import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import bg from '../images/bg.png';
const GlobalStyle = createGlobalStyle`
  ${normalize}
    *{
      outline: none; 
      font-family: 'Noto Sans KR', sans-serif;
    }
    body{
      padding: 0;
      margin: 0;
      background-color:#343434;
      color:white;
    background-image: url(${bg});
    background-position: center bottom;
    background-repeat: no-repeat;
    }
    a{
      all: unset;
    }
    button{
      all:unset;
      cursor:pointer;
    }
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0;
      margin: 0;
    }
    .row-container{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .col-container{
      display: flex;
      flex-direction: column;
    }
    input{
      all:unset;
    }
`;

export default GlobalStyle;
