import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <section>
    <Link to="/">Close</Link>
    <h2>{data.tou.title}</h2>
    {/* Terms of Use */}
    <h3>{data.tou.subtitle}</h3>
    {/* Videos After Dark Library */}
    {data.tou.body}
    {/* <p>Last Updated: November 15, 2014</p>
    <p>
      A. THE SERVICES; AUTHORIZATION TO USE:
      <br /> Please read these terms and policies (referred to herein as “Terms
      of Use”) as well as the America’s Funniest Home Videos Library (referred
      to herein as “AFV”) Privacy Policy (found at http://www.afv.com/privacy/
      and incorporated herein by reference) before using the AFV website (“AFV
      website,” “AFV site,” “website,” or “site”) or any of AFV’s products,
      software, data or other applications (collectively referred to as the
      “Services”).
      <span className="underline">
        By using the Services, you (“You” or “Your”) are agreeing to the Terms
        of Use. If You do not agree to these Terms of Use, or if you do not have
        the authority to agree, You may not use the Services
      </span>
      . Your use of the Services includes the ability and consent to enter into
      agreements electronically. YOU ACKNOWLEDGE THAT YOUR ELECTRONIC
      SUBMISSION(S) CONSTITUTES YOUR AGREEMENT AND INTENT TO BE LEGALLY BOUND BY
      THE TERMS HEREIN. CARA (as defined herein) may, in its sole discretion,
      modify or revise these Terms of Use and policies at any time, and You
      agree to be bound by such modifications or revisions. Nothing in these
      Terms of Use shall be deemed to confer any third-party rights or benefits.
      These Terms of Use apply to all users of the Service, including users who
      are also contributors of Content (as hereinafter defined) on the Service.
    </p> */}
  </section>
);

export const query = graphql`
  query {
    tou {
      title
      subtitle
      body
    }
  }
`;
