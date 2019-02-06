'use strict';
require('dotenv').config;

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false
      }
    }
  ]
};
