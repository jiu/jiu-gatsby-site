import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styled from "styled-components";

const Timeline = styled.div`
  &:before {
    content: "";
    position: absolute;
    height: calc(100% + 6rem);
    border: 1px solid #eb219b;
    left: 0px;
    top: -3rem;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (min-width: 768px) {
    &:before {
      left: calc(4.5rem - 2px);
      right: auto;
    }
  }
`;
const TimelineItem = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const JobContainer = styled.div`
  margin-bottom: 4rem;
  .subtitle {
    margin: 0;
  }
  padding: 1rem;
  border: 2px solid #eb219b;
  border-image: linear-gradient(to right, #a400ff 0%, #eb219b 100%);
  border-image-slice: 1;
  position: relative;
  clear: both;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: 2rem 0rem 2rem 3rem;
    &:after,
    &:before {
      content: "";
      position: absolute;
    }

    &:before {
      left: -10px;
      top: calc(50% - 5px);
      border-style: solid;
      border-color: #a400ff #a400ff transparent transparent;
      border-width: 10px;
      transform: rotate(225deg);
    }
  }

  ul {
    list-style-type: disc;
    margin-left: 1rem;
  }
`;

const YearContainer = styled.span`
  position: relative;
  background-color: #a400ff;
  color: white;
  padding: 0.5rem;
  display: inline-block;
  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;

const getYear = (date) => {
  return date.split("-")[0];
};

const Resume = ({ data }) => {
  return (
    <Layout title={data.dataJson.translation.cvExperiences.en}>
      <SEO title={data.dataJson.translation.cvExperiences.en} htmlclass="" />
      <section className="section">
        <div className="container">
          <Timeline>
            {data.dataJson.work.map((work, index) => {
              const startDate = work.startDate;
              const startYear = getYear(startDate);
              return (
                <TimelineItem key={`content_item_${index}`}>
                  <YearContainer>{startYear}</YearContainer>
                  <JobContainer>
                    <h3 className="title">{work.position.en}</h3>
                    <a
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jiu-links"
                    >
                      {work.company}
                    </a>
                    &nbsp; ({work.location.en})
                    <p>
                      {work.startDate} - {work.endDate}
                    </p>
                    <br />
                    <ul>
                      {work.highlights.en.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <br />
                    <p>
                      <strong>
                        {data.dataJson.translation.cvAchievements.en} :&nbsp;
                      </strong>
                      {work.achievements.en}
                    </p>
                    <p>
                      <strong>
                        {data.dataJson.translation.cvSkillsUsed.en} :&nbsp;
                      </strong>
                      {work.skills}
                    </p>
                    <br />
                    <small>{work.summary.en}</small>
                    <p>
                      <strong>
                        {data.dataJson.translation.cvSecteur.en} :&nbsp;
                      </strong>
                      {work.domain.en}
                    </p>
                    <p>
                      <strong>
                        {data.dataJson.translation.cvTeam.en} :&nbsp;
                      </strong>
                      {work.team}
                    </p>
                  </JobContainer>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    dataJson {
      translation {
        cvTeam {
          en
        }
        cvAchievements {
          en
        }
        cvPeople {
          en
        }
        cvSecteur {
          en
        }
        cvSkillsUsed {
          en
        }
        cvExperiences {
          en
        }
      }
      work {
        company
        endDate
        domain {
          en
        }
        achievements {
          en
        }
        highlights {
          en
        }
        location {
          en
        }
        position {
          en
        }
        skills
        startDate
        summary {
          en
        }
        team
        website
      }
    }
  }
`;

export default Resume;
