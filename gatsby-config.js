'use strict';
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Videos After Dark`
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`
          }
        ]
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
