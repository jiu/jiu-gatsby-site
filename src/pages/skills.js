import React from "react"
import JSONData from "../../content/cv-fr-julie-dubois.json"
import Layout from "../components/layout"

const skills = () => (
  <Layout>
    <section class="section">
      <div class="container">
        <h2 class="title">{JSONData.translation["cv-skills"]}</h2>
        {JSONData.skills.map((data, index) => {
          return (
            <div key={`content_item_${index}`}>
              <h3 class="subtitle">
                {data.name}
              </h3>
              <ul>
                {data.keywords.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <hr />
            </div>
          )
        })}
        <h2 class="title">{JSONData.translation["cv-training"]}</h2>
        {JSONData.education.map((data, index) => {
          return (
            <div key={`content_item_${index}`}>
              <h3 class="subtitle">
                {data.area} ({data.institution})
              </h3>
              <p class="is-size-7">
                {data.startDate} -> {data.endDate}
              </p>
              <br />
              <p>{data.summary}</p>
              <br />
              <p class="is-size-7">{data.studyType}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </section>
  </Layout>
)
export default skills
