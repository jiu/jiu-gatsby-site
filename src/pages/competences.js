import React from "react"
import JSONData from "../data/cv-fr-julie-dubois.json"
import Layout from "../components/layout"
import Header from "../components/header"

const skills = () => (
  <Layout>
    <Header />
    <section class="section">
      <div class="container">
        <h2 class="title">{JSONData.translation["cv-skills"]}</h2>
        <p className="jiu-m2">{JSONData.basics.summary}</p>
        <div class="columns is-multiline">
        {JSONData.skills.map((data, index) => {
          return (
            <div class="column is-half-tablet" key={`content_item_${index}`}>
              <h3 class="subtitle jiu-title">
                {data.name}
              </h3>
              <ul>
                {data.keywords.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )
        })}
        </div>
        {/* <h2 class="title">{JSONData.translation["cv-training"]}</h2>
        {JSONData.education.map((data, index) => {
          return (
            <div key={`content_item_${index}`}>
              <h3 class="subtitle">
                {data.area} ({data.institution})
              </h3>
              <p class="is-size-7">
                {data.startDate} -> {data.endDate}
              </p>
              <p>{data.summary}</p>
              <p class="is-size-7">{data.studyType}</p>
              <br />
            </div>
          )
        })} */}
      </div>
    </section>
  </Layout>
)
export default skills
