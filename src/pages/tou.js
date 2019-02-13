import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { PageContainer } from '../styles/pages.css';
import { GlobalStyle } from '../styles/common.css';

export default ({ data }) => (
  <>
    <GlobalStyle />
    <PageContainer>
      <Img className="cover" fluid={data.datoCmsTou.cover.fluid} />
      <div className="content">
        <Link to="/"> ⬅ Back</Link>
        <h1>{data.datoCmsTou.title}</h1>
        <h2>{data.datoCmsTou.subtitle}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsTou.bodyNode.childMarkdownRemark.html
          }}
        />
      </div>
    </PageContainer>
  </>
);

export const query = graphql`
  query TouQuery {
    datoCmsTou {
      cover {
        url
        fluid(maxWidth: 2000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      title
      subtitle
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
