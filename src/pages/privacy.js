import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <section>
    <Link to="/">Close</Link>
    <h2>{data.datoCmsPrivacy.title}</h2>
    {/* Privacy Statement */}
    <h3>{data.datoCmsPrivacy.subtitle}</h3>
    {/* Privacy Policy */}

    {data.datoCmsPrivacy.body}

    {/* <p>Last Updated: November 15, 2014</p>
    <p>
      Thank you for visiting the America’s Funniest Home Videos website,
      AFV.com. AFV.com provides a unique way to keep in touch with America’s
      Funniest Home Videos (“AFV”). Check tune-in times, upload your video for a
      chance to win cash prizes, watch viral videos, read blog posts, share
      content and join the conversation with the AFV community. America’s
      Funniest Home Videos (“AFV,” “we,” “us,” or “our”) respects each
      individual’s right to personal privacy. We will collect and use
      information through our upload wizard and from users signing up to receive
      the AFV.com newsletter and in any other way disclosed in this Privacy
      Policy (“Policy”). AFV has no responsibility for content on websites other
      than AFV.com (“Website”) you may come across while navigating AFV.com.
      Similarly, AFV has no responsibility for content accessed on or through
      the AFV.com website that is created or posted by anyone other than
      authorized AFV employees, agents and/or representatives. This statement
      applies solely to information collected on or through the Website from all
      users (“Users”) and others who access this Website. Please read this
      Privacy Policy as well as our Terms of Use before browsing or using the
      Website.
    </p> */}
  </section>
);

export const query = graphql`
  query {
    datoCmsPrivacy {
      title
      subtitle
      body
    }
  }
`;
