import React from "react";
import { graphql } from "gatsby";
import {
  PDFViewer,
  PDFDownloadLink,
  Page,
  Document,
} from "@react-pdf/renderer";

import Layout from "../components/Layout";
import PdfHeader from "../components/automated-resume/PdfHeader";
import PdfSkills from "../components/automated-resume/PdfSkills";
import PdfExperience from "../components/automated-resume/PdfExperience";
import PdfEducation from "../components/automated-resume/PdfEducation";
import PdfLanguages from "../components/automated-resume/PdfLanguages";

export const ResumeLink = () => (
  <div>
    <PDFDownloadLink document={<Resume />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

function Resume({ data }) {
  console.log(data);
  return (
    <Layout>
      <PDFViewer className="iframe">
        <Document>
          <Page size="A4" wrap>
            <PdfHeader data={data.dataJson.basics} />
            <PdfSkills
              data={data.dataJson.skills}
              title={data.dataJson.translation.cvSkills.en}
            />
            <PdfExperience
              data={data.dataJson.work}
              translation={data.dataJson.translation}
            />
            <PdfEducation
              data={data.dataJson.education}
              title={data.dataJson.translation.cvTraining.en}
            />
            <PdfLanguages
              data={data.dataJson.languages}
              title={data.dataJson.translation.cvLanguages.en}
            />
          </Page>
        </Document>
      </PDFViewer>
    </Layout>
  );
}

export const query = graphql`
  query {
    dataJson {
      basics {
        name
        label
        fisrtname
        lastname
        location {
          city
          countryCode
        }
        email
        phone
        website
        summary {
          en
        }
      }
      translation {
        cvSkills {
          en
        }
        cvTraining {
          en
        }
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
        cvLanguages {
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
      languages {
        name
        fluency
      }
    }
  }
`;

export default Resume;
