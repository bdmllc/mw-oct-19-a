import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="continue foshizzle"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nisi!"
      >
        <AniLink fade to="/tours" className="btn-white">
          explore more
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
  </Layout>
)

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
