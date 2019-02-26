//-------------------------------------------------
//  SECONDARY PAGE STYLES
// ------------------------------------------------
import styled from 'styled-components';
import noise from '../imgs/noise.png';

//OVERALL
export const PageContainer = styled.div`
  color: #fff;

  .cover {
    position: fixed !important;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }

  div.content {
    background: url(${noise});
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 15px;
    margin: 10px;
    overflow-wrap: break-word;

    h1,
    h2 {
      font-family: 'Oswald', sans-serif;
      text-transform: uppercase;
      margin: 20px;
    }

    h1 {
      font-size: 1.85em;
      margin-top: 40px;
    }
    h2 {
      font-size: 1.5em;
    }
    p {
      font-family: 'Roboto', sans-serif;
      letter-spacing: 1px;
      font-size: 1em;
      line-height: 1.5em;
      margin: 20px;
    }

    a {
      color: #fff;
      font-size: 1.125em;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  div.uploader-content {
    // height: 100vh;
    max-width: 866px;
    padding: 25px;
  }

  div.uploader {
    margin-top: 20px;
  }

  @media (min-width: 380px) {
    div.content {
      height: 100%;
      width: 88vw;
      margin: 3% auto;
    }
    div.uploader-content {
      // height: 100vh;
    }
  }
`;
