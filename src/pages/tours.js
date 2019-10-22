import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Discoveries from "../components/Discoveries/Discoveries.js"
import { graphql } from "gatsby"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
        <Discoveries />
      </Layout>
    )
  }
}

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
