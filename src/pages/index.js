import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { LandingContainer } from '../styles/index.css';
import { GlobalStyle } from '../styles/common.css';

import MainNav from '../components/mainNav';

import Footer from '../components/footer';

function IndexPage({ data }) {
  return (
    <>
      <GlobalStyle />
      <LandingContainer>
        <main className="top" role="main">
          <Img className="cover" fluid={data.datoCmsIndex.cover.fluid} />
          <MainNav />
          <div className="main-info drop-down">
            
            <Img
              className="logo fade-in"
              fluid={data.datoCmsIndex.logo.fluid}
              alt="Videos After Dark Logo"
            />
            <h2>{data.datoCmsIndex.launch}</h2>
            <img
              className="abc fade-in"
              src={require('../imgs/abc_vector.png')}
              alt="ABC logo"
            />

          </div>
        </main>
        <section className="submit-details">
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.datoCmsIndex.uploadDescriptionNode.childMarkdownRemark.html
            }}
          />
           <Link className="btn fade-in submit-video" to="/upload">
              Submit a Video
            </Link>
          <p className="warning">{data.datoCmsIndex.uploadWarning}</p>
        </section>

        {/* <section className="video">
          <video width="100%" controls>
            <source
              id="mp4"
              src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              type="video/mp4"
            />
            <source
              id="webm"
              src="http://media.w3.org/2010/05/sintel/trailer.webm"
              type="video/webm"
            />
            <source
              id="ogv"
              src="http://media.w3.org/2010/05/sintel/trailer.ogv"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </section> */}

        <section className="details">
          <div>
            <h1>{data.datoCmsIndex.title}</h1>
            <div
              className="noset"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsIndex.bodyNode.childMarkdownRemark.html
              }}
            />
            <p>
              <span className="announcement">
                {data.datoCmsIndex.announcement}
              </span>
            </p>
            <p className="social">
              Follow us on{' '}
              <a href="https://twitter.com/videosafterdark">
                <img
                  className="twitter fade-in"
                  src={require('../imgs/Twitter_Social_Icon_Circle_Color.png')}
                  alt="twitter icon"
                />
              </a>
              <a href="https://www.instagram.com/videosafterdark/">
                <img
                  className="ig fade-in"
                  src={require('../imgs/IG.png')}
                  alt="IG icon"
                />
              </a>
            </p>
          </div>
          <img
            className="bob fade-in"
            src={require('../imgs/bob1.png')}
            alt="Bob Saget"
          />
        </section>

        <Footer />
      </LandingContainer>
    </>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsIndex {
      cover {
        url
        fluid(maxWidth: 3000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      logo {
        fluid(maxWidth: 350, imgixParams: { fm: "png", auto: "compress" }) {
          src
        }
      }
      launch
      title
      uploadDescriptionNode {
        childMarkdownRemark {
          html
        }
      }
      uploadWarning
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      announcement
    }
  }
`;
