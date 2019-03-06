import React from 'react';

import Iframe from 'react-iframe';
import { Link } from 'gatsby';

//import Loading from '../imgs/loading.svg';
import City from '../imgs/CubeTopDown_h264.jpg';

import { PageContainer } from '../styles/pages.css';
import { GlobalStyle } from '../styles/common.css';

import Footer from '../components/footer';

class Upload extends React.Component {


  askIframeHeight(ifrm) {
    ifrm.contentWindow.postMessage("FrameHeight", "*");
  }

  componentDidMount() {
    //handle received message by the uploader (the message contains the height of the uploader)
    let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window (from the uploader)
    eventer(messageEvent,function(e) {
      let key = e.message ? "message" : "data";
      let data = e[key];
      if (data.hasOwnProperty("FrameHeight")) {
        console.log('msessage received from the uploader');
        console.log(data.FrameHeight);
        //Set height of the Iframe
        document.getElementsByClassName("uploader-frame")[0].style.height = data.FrameHeight + "px";
      }
    },false);


    var scroll_timeout;
    let throttle = 200;
    var that = this;
    window.onresize =  function(){
      if (!scroll_timeout) {
        scroll_timeout = setTimeout(function () {
          let ifrm = document.querySelector("iframe");
          that.askIframeHeight(ifrm);
          scroll_timeout = null;
        }, throttle);
      }
    }
  }

  render() {
    // let uploader = {
    //   height: '600px',
    //   backgroundImage: `url(${Loading})`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center'
    // };

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
            <div className="uploader">
              <Iframe
                style={uploaderFrame}
                url="https://afvdev.wpengine.com/upload-vad"
                title="uploader"
                height="100%"
                minHeight="600px"
                scrolling="no"
                id="uploader"
                className="uploader-frame"
                display="initial"
                position="relative"
                allowFullScreen
                frameBorder="0"
                ref={(f) => this.ifr = f}
              />
            </div>
          </div>
        </PageContainer>
          <Footer />
      </>
    );
  }
}

export default Upload;
