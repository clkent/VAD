'use strict';
require('dotenv').config;

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `198eee2f918f547238770839fab2d8`, //process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false
      }
    }
  ]
};
