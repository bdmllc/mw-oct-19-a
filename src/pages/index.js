import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue foshizzle"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nisi!"
      >
        <Link to="/tours" className="btn-white">
          explore more
        </Link>
      </Banner>
    </SimpleHero>
    <About />
  </Layout>
)
