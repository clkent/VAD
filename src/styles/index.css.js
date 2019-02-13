//-------------------------------------------------
// LANDING PAGE STYLES
// ------------------------------------------------

import styled from 'styled-components';
import noise from '../imgs/noise.png';

//OVERALL
export const LandingContainer = styled.div`
  height: 100%;

  .top {
    font-family: 'Oswald', sans-serif;
    height: 100vh;

    .cover {
      position: fixed !important;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100%;
      z-index: -1;
    }

    div.main-info {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .abc {
        max-width: 68px;
        margin-bottom: 45px;
        margin-top: 50px;
      }

      .logo {
        position: relative;
        width: 325px;
        min-height: 210px;
        margin-top: 30px;

        -webkit-filter: drop-shadow(2px 2px 5px #000);
        filter: drop-shadow(2px 2px 5px #000);
      }

      h2 {
        color: white;
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
        font-size: 1.6em;
        letter-spacing: 2px;
        text-align: center;

        max-width: 300px;
        margin-top: 10px;

        -webkit-animation: neon 1.5s ease-in-out infinite alternate,
          flicker 10s linear infinite both,
          fade-in 4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        -moz-animation: neon 1.5s ease-in-out infinite alternate,
          flicker 10s linear infinite both,
          fade-in 4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: neon 1.5s ease-in-out infinite alternate,
          flicker 10s linear infinite both,
          fade-in 4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      }

      a.btn {
        background: #000;
        padding: 15px 30px;
        border-radius: 100px;
        border: 3px solid #fff;
        opacity: 0.9;
        box-shadow: 5px 5px 15px #000;

        text-decoration: none;
        text-transform: uppercase;
        color: white;
        letter-spacing: 2px;
        cursor: pointer;

        margin-top: 40px;
      }
      /* ANIMATIONS */

      .fade-in {
        -webkit-animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      }

      /* .slide-in {
        -webkit-animation: slide-in-bck-center 2s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-bck-center 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          both;
      } */

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
      }

      /*
    * ----------------------------------------
    * neon glow around text
    * ----------------------------------------
    */

      @keyframes neon {
        from {
          text-shadow: 0 0 1px pink, 0 0 4px pink, 0 0 6px red, 0 0 10px #ff1177,
            0 0 12px #ff1177, 0 0 15px #ff1177, 0 0 18px #ff1177,
            0 0 20px #ff1177;
        }
        to {
          text-shadow: 0 0 1px pink, 0 0 8px pink, 0 0 10px red,
            0 0 10px #ff1177, 0 0 12px #ff1177, 0 0 15px #ff1177,
            0 0 20px #ff1177, 0 0 22px #ff1177, 0 0 24px #ff1177;
        }
      }

      /**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
      @-webkit-keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  @media (min-width: 380px) {
    .top {
      div.main-info {
        .abc {
          margin-top: 10px;
        }

        .logo {
          width: 450px;
          height: 310px;
          -webkit-filter: drop-shadow(10px 10px 15px #000);
          filter: drop-shadow(10px 10px 15px #000);
        }
      }
    }
  }

  .details {
    width: 100vw;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url(${noise});
    color: #fff;

    div {
      max-width: 700px;
      align-self: center;
      justify-items: center;
      margin: 20px 20px 35px 40px;
      text-align: center;

      h1 {
        font-size: 1.75em;
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        /* margin: 80px 20px 20px 20px; */
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.125em;
        line-height: 1.5em;
      }

      p.social {
        position: relative;
        bottom: 0px;
        margin: 0;
        a {
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'Oswald', sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #fff;
          font-size: 0.95em;

          .twitter {
            max-width: 22px;
            padding: 0 2px;
          }
        }
      }

      span.announcement,
      strong {
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 1px;
      }

      span.announcement {
        color: #ff6780;
      }
    }

    .bob {
      width: 80vw;
    }

    @media (min-width: 380px) {
      border-top: 1px solid #000;
      background: url(${noise});

      div {
        p {
          font-size: 1.5em;
          line-height: 1.75em;
        }
      }
      .bob {
        position: relative;
        z-index: 1;
        max-width: 500px;
        right: -15px;
        margin-top: 25px;
      }

      /*ANIMATIONS*/

      /* .slide-top {
        -webkit-animation: slide-top 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s
          both;
        animation: slide-top 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
      } */
      /**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
      @-webkit-keyframes slide-top {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        100% {
          -webkit-transform: translateY(-100px);
          transform: translateY(-100px);
        }
      }
      @keyframes slide-top {
        0% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        100% {
          -webkit-transform: translateY(-100px);
          transform: translateY(-100px);
        }
      }
    }

    @media (min-width: 1099px) {
      flex-direction: row;
      max-height: 650px;
    }

    @media (min-width: 1325px) {
      justify-content: space-between;

      div {
        margin-left: 15%;
        text-align: center;
        max-width: 680px;
      }
    }

    @media (min-width: 1960px) {
      div {
        margin-left: 38%;
      }
    }
  }
`;
