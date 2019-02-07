import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import { LandingContainer } from '../styles/index.css';

import MainNav from '../components/mainNav';
import Footer from '../components/footer';

export default ({ data }) => (
  <LandingContainer>
    <main className="top" role="main">
      <MainNav />
      <div className="main-info">
        <img
          className="logo"
          src={require('../imgs/CubeLogoRed.png')}
          alt="After Dark Logo"
        />
        <h2>March 12th</h2>
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
      <img className="bob" src={require('../imgs/bob1.png')} alt="Bob Saget" />
    </section>

    <Footer />
  </LandingContainer>
);

export const query = graphql`
  query {
    datoCmsIndex {
      title
      body
    }
  }
`;
