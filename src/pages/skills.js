import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styled from "styled-components";

const TrainingContainer = styled.div`
  margin-bottom: 2rem;
  .subtitle {
    margin-bottom: 0.5rem;
  }
`;

const Skills = ({ data }) => {
  return (
    <Layout title={data.dataJson.translation.cvSkills.en}>
      <SEO title={data.dataJson.translation.cvSkills.en} htmlclass="" />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-variable is-8-desktop">
            {data.dataJson.skills.map((data, index) => {
              return (
                <TrainingContainer
                  className="column is-half-tablet is-one-third-desktop"
                  key={`content_item_${index}`}
                >
                  <h3 className="subtitle jiu-title">{data.name}</h3>
                  <ul>
                    {data.keywords.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </TrainingContainer>
              );
            })}
          </div>
          <div className="jiu-wavy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <h2 className="title">{data.dataJson.translation.cvTraining.en}</h2>
          {data.dataJson.education.map((data, index) => {
            return (
              <TrainingContainer key={`content_item_${index}`}>
                <h3 className="subtitle jiu-title">
                  {data.area} ({data.institution})
                </h3>
                <p className="is-size-7">
                  {data.startDate} -> {data.endDate}
                </p>
                <p>{data.summary}</p>
                <p className="is-size-7">{data.studyType}</p>
              </TrainingContainer>
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
