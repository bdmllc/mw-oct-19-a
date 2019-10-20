import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        hola from tours page!!!
        <Link to="/">back to home page</Link>
      </Layout>
    )
  }
}
