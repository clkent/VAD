'use strict';

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `198eee2f918f547238770839fab2d8`,
        preview: false,
        disableLiveReload: false
      }
    }
  ]
};
