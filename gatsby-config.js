module.exports = {
  siteMetadata: {
    title: "Miami Walking",
    description: "Random discoveries while walking around Miami, Florida. ",
    author: "Walker, Miami Ranger",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    `gatsby-plugin-styled-components`,
  ],
}
