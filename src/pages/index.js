import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import MainNav from '../components/mainNav';
import Footer from '../components/footer';

export default ({ data }) => (
  <>
    <main className="top" role="main">
      <MainNav />
      <h1>Videos After Dark logo</h1>
      <Link className="btn" to="/upload">
        Submit a Video
      </Link>
    </main>

    <div>
      <h1>{data.datoCmsIndex.title}</h1>
      {/* Bob Saget is back */}
      {data.datoCmsIndex.body}
      {/* The producers of “America’s Funniest Home Videos” have created the new
        comedy reality series “Videos After Dark” hosted by comedian Bob Saget
        and featuring home videos with an edgier twist. */}
    </div>

    <Footer />
  </>
);

export const query = graphql`
  query {
    datoCmsIndex {
      title
      body
    }
  }
`;
