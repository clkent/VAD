import React from 'react';
import { Link } from 'gatsby';

import { FooterContainer } from '../styles/common.css';

export default () => {
  return (
    <FooterContainer>
      {/* <Link to="/tou">Terms of Use</Link> */}
      <Link to="/privacy">Privacy Statement</Link>
      <span>Vin Di Bona Productions | 2019</span>
    </FooterContainer>
  );
};
