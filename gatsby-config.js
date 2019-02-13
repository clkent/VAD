'use strict';
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Videos After Dark',
    description:
      'a new comedy reality series hosted by comedian Bob Saget, featuring home videos with an edgier twist. The hits are a little harder, the language a bit saltier, the animals a little less cute, the kids a tad less adorable and the embarrassing moments more revealing. Welcome to the night life. Everything’s funnier AFTER DARK.',
    url: 'https://www.videosafterdark'
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: []
      }
    },
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
