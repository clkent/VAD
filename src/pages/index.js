import React from 'react';
// import { Link } from 'gatsby';
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
            {/* <Link className="btn" to="/upload">
              Submit a Video
            </Link> */}
          </div>
        </main>

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
              <a href="https://twitter.com/videosafterdark">
                Follow us on{' '}
                <img
                  className="twitter fade-in"
                  src={require('../imgs/Twitter_Social_Icon_Circle_Color.png')}
                  alt="ABC logo"
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
        fluid(maxWidth: 450, imgixParams: { fm: "png", auto: "compress" }) {
          src
        }
      }
      launch
      title
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      announcement
    }
  }
`;
