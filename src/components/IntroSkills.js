import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const IntroSkills = () => {
  const data = useStaticQuery(
    graphql`
      query {
        dataJson {
          services {
            name
            img
          }
        }
        file(relativePath: { eq: "images/IMG_20160523_131308.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-center">Mes spécialités</h2>
        <div className="columns is-centered">
          {data.dataJson.services.map((service, index) => {
            return (
              <div className="column has-text-centered">
                <p>{service.name}</p>
              </div>
            );
          })}
        </div>
        <Link to="/competences" className="button">
          More
        </Link>
      </div>
    </section>
  );
};

export default IntroSkills;
