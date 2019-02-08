import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { LandingContainer } from '../styles/index.css';

//Social links hidden for now
// import MainNav from '../components/mainNav';

import Footer from '../components/footer';

function IndexPage({ data }) {
  const coverBg = {
    backgroundImage: `url(${data.datoCmsIndex.cover.fluid.src})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  };

  return (
    <LandingContainer>
      <main className="top" role="main" style={coverBg}>
        {/* <MainNav /> */}
        <div className="main-info">
          {/* <Img fluid={data.datoCmsIndex.logo.fluid.src} /> */}
          <img
            className="logo"
            src={data.datoCmsIndex.logo.fluid.src}
            alt="After Dark Logo"
          />
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
        fluid(maxWidth: 3000, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      logo {
        fluid(maxWidth: 400, imgixParams: { fm: "png", auto: "compress" }) {
          src
        }
      }
      launch
      title
      body
    }
  }
`;
