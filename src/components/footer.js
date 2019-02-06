import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
    <footer className="footer" role="contentinfo">
      <Link to="/tou">Tearms of Use</Link>
      <Link to="/privacy">Privacy Statement</Link>
      <span>Vin Di Bona Productions | 2019</span>
    </footer>
  );
};
