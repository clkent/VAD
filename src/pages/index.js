import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { LandingContainer } from '../styles/index.css';

//Social links hidden for now
// import MainNav from '../components/mainNav';

import Footer from '../components/footer';

function IndexPage({ data }) {
  return (
    <LandingContainer>
      <main className="top" role="main">
        <Img
          fluid={data.datoCmsIndex.cover.fluid}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            zIndex: '-1'
          }}
        />
        {/* <MainNav /> */}
        <div className="main-info">
          <img
            className="abc"
            src={require('../imgs/abc_vector.png')}
            alt="ABC logo"
          />
          <Img
            fluid={data.datoCmsIndex.logo.fluid}
            style={{
              position: 'relative',
              width: '400px'
            }}
          />
          {/* <img
            className="logo"
            src={data.datoCmsIndex.logo.fluid.src}
            alt="After Dark Logo"
          /> */}
          <h2>{data.datoCmsIndex.launch}</h2>
          <Link className="btn" to="/upload">
            Submit a Video
          </Link>
        </div>
      </main>

      <section className="details">
        <div>
          <h1>{data.datoCmsIndex.title}</h1>
          <p>{data.datoCmsIndex.body}</p>
        </div>
        <img
          className="bob"
          src={require('../imgs/bob1.png')}
          alt="Bob Saget"
        />
      </section>

      <Footer />
    </LandingContainer>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsIndex {
      cover {
        url
        fluid(maxWidth: 2000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      logo {
        fluid(maxWidth: 400, imgixParams: { fm: "png", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      launch
      title
      body
    }
  }
`;
