import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <section>
    <Link to="/">Close</Link>
    <h2>{data.datoCmsTou.title}</h2>
    {/* Terms of Use */}
    <h3>{data.datoCmsTou.subtitle}</h3>
    {/* Videos After Dark Library */}
    {data.tou.body}
  </section>
);

export const query = graphql`
  query {
    datoCmsTou {
      title
      subtitle
      body
    }
  }
`;
