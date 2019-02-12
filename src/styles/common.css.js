//-------------------------------------------------
// COMMON SHARED STYLES
// ------------------------------------------------

import styled, { createGlobalStyle } from 'styled-components';
import noise from '../imgs/noise.png';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000;
  }
`;

//MAIN NAV
export const MainNavStyles = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #fff;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #fff;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: url(${noise});
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.125em;
    letter-spacing: 1px;
    text-decoration: none;
    outline: none;

    :hover {
      color: pink;
    }
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  /* width: auto;
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;

  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 1.125em;
    letter-spacing: 1px;
    text-decoration: none;

    :hover {
      color: pink;
    }
  }

  @media (min-width: 380px) {
    right: 20px;
    top: 20px;

    a {
      font-size: 1.25em;
    }
  } */
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
