import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

import { MainNavStyles } from '../styles/common.css';

class MainNav extends React.Component {
  render() {
    return (
      <MainNavStyles>
        <Menu right>
          <a id="privacy" className="menu-item" href="/privacy">
            Privacy
          </a>
          {/* <Link to="/privacy">Privacy</Link> */}
        </Menu>
      </MainNavStyles>
    );
  }
}

export default MainNav;
