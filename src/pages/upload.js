import React from 'react';

import Iframe from 'react-iframe';
import { Link } from 'gatsby';

import Loading from '../imgs/loading.svg';
import City from '../imgs/CubeTopDown_h264.jpg';

import { PageContainer } from '../styles/pages.css';
import { GlobalStyle } from '../styles/common.css';

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
        <GlobalStyle />
        <PageContainer>
          <img className="cover" src={City} alt="cityscape background image" />
          <div className="content uploader-content">
            <Link to="/"> ⬅ Back</Link>
            <div className="uploader" style={uploader}>
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
          </div>
        </PageContainer>
      </>
    );
  }
}

export default Upload;
