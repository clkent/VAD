import React from 'react';
// import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { LandingContainer, GlobalStyle } from '../styles/index.css';

//Social links hidden for now
// import MainNav from '../components/mainNav';

import Footer from '../components/footer';

function IndexPage({ data }) {
  return (
    <>
      <GlobalStyle />
      <LandingContainer>
        <main className="top" role="main">
          <Img className="cover" fluid={data.datoCmsIndex.cover.fluid} />
          {/* <MainNav /> */}
          <div className="main-info drop-down">
            <Img
              className="logo fade-in"
              fluid={data.datoCmsIndex.logo.fluid}
              alt="After Dark Logo"
            />
            <h2>{data.datoCmsIndex.launch}</h2>
            <img
              className="abc"
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
            <p>{data.datoCmsIndex.body}</p>
            <p>
              <strong>Watch us on ABC, March 12th 10/9c.</strong>
            </p>
          </div>
          <img
            className="bob slide-top"
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
          ...GatsbyDatoCmsSizes
        }
      }
      launch
      title
      body
    }
  }
`;
