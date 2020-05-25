import React from "react"
import JSONData from "../../content/cv-fr-julie-dubois.json"
import Layout from "../components/layout"

const resume = () => (
  <Layout>
    <section class="section">
      <div class="container">
        <h2 class="subtitle">{JSONData.translation["cv-experiences"]}</h2>
        {JSONData.work.map((data, index) => {
          return (
            <div key={`content_item_${index}`}>
              <h3>{data.position}</h3>
              <a href={data.website} target="_blank">
                {data.company} ({data.location})
              </a>
              <p class="is-size-7">
                {data.startDate} -> {data.endDate}
              </p>
              <br />
              <ul>
                {data.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <br />
              <p class="is-size-7">
                <strong>{JSONData.translation["cv-skills-used"]} :</strong>{" "}
                {data.skills}
              </p>
              <p class="is-size-7">
                <strong>{JSONData.translation["cv-secteur"]} :</strong>{" "}
                {data.domain}
              </p>
              <p class="is-size-7">
                <strong>{JSONData.translation["cv-team"]} :</strong> {data.team}{" "}
                {JSONData.translation["cv-people"]}
              </p>
              <hr />
            </div>
          )
        })}
      </div>
    </section>
  </Layout>
)
export default resume
