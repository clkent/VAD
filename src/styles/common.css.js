//-------------------------------------------------
// COMMON SHARED STYLES
// ------------------------------------------------

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000;
  }
`;

//FOOTER
export const FooterContainer = styled.footer`
  height: 150px;
  padding-top: 35px;
  background-color: #000;
  border-top: 1px solid #1b1b1b;

  display: flex;
  flex-direction: column;

  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75em;
  text-align: center;
  color: #fff;

  a {
    color: #fff;
    padding: 5px 0 10px 0;
  }
  span {
    padding-top: 25px;
  }

  @media (min-width: 380px) {
    padding-top: 35px;
    height: 45px;

    position: relative;
    z-index: 5;

    flex-direction: row;
    justify-content: center;

    font-size: 0.75em;
    a {
      margin-right: 30px;
    }

    span {
      padding-top: 5px;
    }
  }
`;
