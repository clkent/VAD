import React from 'react';
import { Link } from 'gatsby';
import { MainNav } from '../styles/common.css';

export default () => {
  return (
    <MainNav>
      <Link to="/privacy">Privacy</Link>
    </MainNav>

    // <div className="social">
    //   <a className="fb-icon" href="https://www.facebook.com/videosafterdark">
    //     FB
    //   </a>
    //   <a className="yt-icon" href="https://www.youtube.com">
    //     YT
    //   </a>
    //   <a className="ig-icon" href="https://www.instagram.com">
    //     IG
    //   </a>
    // </div>
  );
};
