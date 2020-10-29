import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Skills = ({data}) => {
  console.log(data);
  return (
    <Layout>
    <section className="section">
      <div className="container">
        <h2 className="title">{data.dataJson.translation.cvSkills.en}</h2>
        <div className="columns is-multiline">
          {data.dataJson.skills.map((data, index) => {
            return (
              <div className="column is-half-tablet" key={`content_item_${index}`}>
                <h3 className="subtitle jiu-title">{data.name}</h3>
                <ul>
                  {data.keywords.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="jiu-wavy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <h2 className="title">{data.dataJson.translation.cvTraining.en}</h2>
        {data.dataJson.education.map((data, index) => {
          return (
            <div key={`content_item_${index}`}>
              <h3 className="subtitle jiu-title">
                {data.area} ({data.institution})
              </h3>
              <p className="is-size-7">
                {data.startDate} -> {data.endDate}
              </p>
              <p>{data.summary}</p>
              <p className="is-size-7">{data.studyType}</p>
              <br />
            </div>
          );
        })}
      </div>
    </section>
  </Layout>
  );

  

};


export const query = graphql`
    query {
      dataJson {
        translation {
          cvSkills {
            en
          }
          cvTraining {
            en
          }
        }
        skills {
          name
          keywords
        }
        education {
          area
          endDate
          institution
          startDate
          studyType
          summary
        }
      }
    }
  `;


export default Skills;

