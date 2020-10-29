import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";


const Resume = ({data}) => {
  console.log(data);
  return(
  <Layout>
      <div className="container">
        <h2 className="title">{data.dataJson.translation.cvExperiences.en}</h2>
        {data.dataJson.work.map((work, index) => {
          return (
           
            <div key={`content_item_${index}`}>
              <h3 className="subtitle jiu-title">{work.position.en}</h3>
              <a
                href={work.website}
                target="_blank"
                rel="noopener noreferrer"
                className="jiu-links"
              >
                {work.company}
              </a>
              ({work.location.en})
              <p className="">
                {work.startDate} - {work.endDate}
              </p>
              <br />
              <ul>
                {work.highlights.en.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <br />
              <p className="">
                <strong>{data.dataJson.translation.cvAchievements.en} :</strong>
                {work.achievements.en}
              </p> 
              <p className="">
                <strong>{data.dataJson.translation.cvSkillsUsed.en} :</strong>
                {work.skills}
              </p>
              <br />
              <small>{work.summary.en}</small> 
              <p className="">
                <strong>{data.dataJson.translation.cvSecteur.en} :</strong>
                {work.domain.en}
              </p>
              <p className="">
                <strong>{data.dataJson.translation.cvTeam.en} :</strong>
                {work.team} {data.dataJson.translation.cvPeople.en}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
  </Layout>
)
};

export const query = graphql`
  query  {
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
