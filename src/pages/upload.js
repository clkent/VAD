import React from 'react';

import Iframe from 'react-iframe';
import { Link } from 'gatsby';

import Loading from '../imgs/loading.svg';

class Upload extends React.Component {
  render() {
    let uploader = {
      height: '600px',
      backgroundImage: `url(${Loading})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

    let uploaderFrame = {
      height: '600px'
    };
    return (
      <>
        <Link to="/">Close</Link>
        <div className="uploader" style={uploader}>
          {/* <img src={loading} alt="loading" /> */}
          <Iframe
            style={uploaderFrame}
            url="https://afv.com/upload-vad/"
            title="uploader"
            height="100vh"
            minHeight="600px"
            scrolling="no"
            id="uploader"
            className="uploader-frame"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>
      </>
    );
  }
}

export default Upload;
