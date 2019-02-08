import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { PageContainer } from '../styles/pages.css';

export default ({ data }) => (
  <PageContainer>
    <Img className="cover" fluid={data.datoCmsPrivacy.cover.fluid} />
    <div className="content">
      <Link to="/"> ⬅ Back</Link>
      <h1>{data.datoCmsPrivacy.title}</h1>
      <h2>{data.datoCmsPrivacy.subtitle}</h2>
      <p>{data.datoCmsPrivacy.body}</p>
    </div>
  </PageContainer>
);

export const query = graphql`
  query {
    datoCmsPrivacy {
      cover {
        url
        fluid(maxWidth: 2000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      title
      subtitle
      body
    }
  }
`;
