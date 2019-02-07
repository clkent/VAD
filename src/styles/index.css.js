//-------------------------------------------------
// LANDING PAGE STYLES
// ------------------------------------------------

import styled from 'styled-components';
import hero from '../imgs/CubeUpwards_h264.jpg';

//OVERALL
export const LandingContainer = styled.div`
  height: 100%;

  .top {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.1)),
      url(${hero}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    font-family: sans-serif;
    height: 80vh;

    div.main-info {
      height: 70vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .logo {
        max-width: 300px;
        -webkit-animation: flicker 10s linear both;
        animation: flicker 10s linear both;
      }

      h2 {
        color: white;
        text-transform: uppercase;
        font-family: sans-serif;

        font-size: 1.5em;
        letter-spacing: 1px;

        -webkit-animation: neon 1.5s ease-in-out infinite alternate;
        -moz-animation: neon 1.5s ease-in-out infinite alternate;
        animation: neon 1.5s ease-in-out infinite alternate;
      }

      a.btn {
        background: #000;
        padding: 15px 30px;
        border-radius: 100px;
        border: 3px solid #fff;
        opacity: 0.9;

        text-decoration: none;
        text-transform: uppercase;
        color: white;
        letter-spacing: 1px;

        margin-top: 60px;
      }
      /* ANIMATIONS */

      /*
    * ----------------------------------------
    * neon glow around text
    * ----------------------------------------
    */

      @keyframes neon {
        from {
          text-shadow: 0 0 5px #fff, 0 0 6px pink, 0 0 8px red, 0 0 12px #ff1177,
            0 0 15px #ff1177, 0 0 18px #ff1177, 0 0 20px #ff1177,
            0 0 20px #ff1177;
        }
        to {
          text-shadow: 0 0 5px #fff, 0 0 8px pink, 0 0 10px red,
            0 0 20px #ff1177, 0 0 22px #ff1177, 0 0 24px #ff1177,
            0 0 26px #ff1177, 0 0 28px #ff1177, 0 0 30px #ff1177;
        }
      }

      /*
    * ----------------------------------------
    * animation flicker
    * ----------------------------------------
    */

      @keyframes flicker {
        0%,
        100% {
          opacity: 1;
        }
        -0.02% {
          opacity: 1;
        }
        0% {
          opacity: 1;
        }
        1% {
          opacity: 1;
        }
        1.02% {
          opacity: 1;
        }
        8.98% {
          opacity: 1;
        }
        9% {
          opacity: 0;
        }
        9.8% {
          opacity: 0;
        }
        9.82% {
          opacity: 1;
        }
        9.48% {
          opacity: 1;
        }
        9.5% {
          opacity: 1;
        }
        9.6% {
          opacity: 1;
        }
        9.62% {
          opacity: 1;
        }
        14.98% {
          opacity: 1;
        }
        15% {
          opacity: 0.5;
        }
        15.8% {
          opacity: 0.5;
        }
        15.82% {
          opacity: 1;
        }
        15.18% {
          opacity: 1;
        }
        15.2% {
          opacity: 0.7;
        }
        16% {
          opacity: 0.7;
        }
        16.02% {
          opacity: 1;
        }
        15.48% {
          opacity: 1;
        }
        15.5% {
          opacity: 0.5;
        }
        16.2% {
          opacity: 0.5;
        }
        16.22% {
          opacity: 1;
        }
        16.98% {
          opacity: 1;
        }
        17% {
          opacity: 1;
        }
        17.8% {
          opacity: 1;
        }
        17.82% {
          opacity: 1;
        }
        20.48% {
          opacity: 1;
        }
        20.5% {
          opacity: 0.9;
        }
        21.3% {
          opacity: 0.9;
        }
        21.32% {
          opacity: 1;
        }
        20.98% {
          opacity: 1;
        }
        21% {
          opacity: 1;
        }
        22% {
          opacity: 1;
        }
        22.02% {
          opacity: 1;
        }
        39.98% {
          opacity: 1;
        }
        40% {
          opacity: 1;
        }
        41% {
          opacity: 1;
        }
        41.02% {
          opacity: 1;
        }
        40.48% {
          opacity: 1;
        }
        40.5% {
          opacity: 0.6;
        }
        41.4% {
          opacity: 0.6;
        }
        41.42% {
          opacity: 1;
        }
        41.98% {
          opacity: 1;
        }
        42% {
          opacity: 1;
        }
        42.8% {
          opacity: 1;
        }
        42.82% {
          opacity: 1;
        }
        59.98% {
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        61% {
          opacity: 1;
        }
        61.02% {
          opacity: 1;
        }
        60.18% {
          opacity: 1;
        }
        60.2% {
          opacity: 0.2;
        }
        61% {
          opacity: 0.2;
        }
        61.02% {
          opacity: 1;
        }
        60.78% {
          opacity: 1;
        }
        60.8% {
          opacity: 0.4;
        }
        61.6% {
          opacity: 0.4;
        }
        61.62% {
          opacity: 1;
        }
        61.38% {
          opacity: 1;
        }
        61.4% {
          opacity: 0;
        }
        62.2% {
          opacity: 0;
        }
        62.22% {
          opacity: 1;
        }
        61.78% {
          opacity: 1;
        }
        61.8% {
          opacity: 1;
        }
        62.8% {
          opacity: 1;
        }
        62.82% {
          opacity: 1;
        }
        75.98% {
          opacity: 1;
        }
        76% {
          opacity: 1;
        }
        77% {
          opacity: 1;
        }
        77.02% {
          opacity: 1;
        }
        77.98% {
          opacity: 1;
        }
        78% {
          opacity: 0.7;
        }
        78.8% {
          opacity: 0.7;
        }
        78.82% {
          opacity: 1;
        }
        78.98% {
          opacity: 1;
        }
        79% {
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        80.02% {
          opacity: 1;
        }
        99.98% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
        101% {
          opacity: 1;
        }
        101.02% {
          opacity: 1;
        }
      }
    }
  }

  .details {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      max-width: 600px;
      align-self: center;
      justify-items: center;

      h1 {
        font-size: 3em;
        margin-bottom: 20px;
      }

      p {
        font-size: 1.5em;
        line-height: 1.45em;
      }
    }
  }
`;
