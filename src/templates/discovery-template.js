import React from "react"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  return <h1>{data.discovery.name}</h1>
}

export const query = graphql`
  query($slug: String!) {
    discovery: contentfulMwDiscoveries(slug: { eq: $slug }) {
      name
      location
      description {
        description
      }
      json {
        discovery
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`

export default Template
