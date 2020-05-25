import React from "react"
import Layout from "../components/layout"
import JSONData from "../../content/cv-fr-julie-dubois.json"

const IndexPage = () => {
  return (
    <Layout>
      <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{JSONData.basics.name}</h1>
            <h2 class="subtitle">{JSONData.basics.label}</h2>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="columns">
            <div class="column is-one-third">
              <h1 class="title">A propos</h1>
            </div>
            <div class="column">
              <p>{JSONData.basics.presentation}</p>
              <p>{JSONData.basics.summary}</p>
            </div>
          </div>

          <hr />
          <h1 class="title">Mes spécialités</h1>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
