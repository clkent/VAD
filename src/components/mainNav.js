import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import { MainNavStyles } from '../styles/common.css';

class MainNav extends React.Component {
  render() {
    return (
      <MainNavStyles>
        <Menu right>
          <a id="upload" className="menu-item" href="/upload">
            Upload
          </a>
          <a id="privacy" className="menu-item" href="/privacy">
            Privacy
          </a>
          <a id="privacyeu" className="menu-item" href="/privacyeu">
            Privacy (EU)
          </a>
          <a id="tou" className="menu-item" href="/tou">
            Terms of Use
          </a>
        </Menu>
      </MainNavStyles>
    );
  }
}

export default MainNav;
