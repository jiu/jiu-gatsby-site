import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const IntroAbout = () => {
  const data = useStaticQuery(
    graphql`
      query {
        dataJson {
          basics {
            summary {
              en
              fr
            }
          }
        }
        file(relativePath: {eq: "images/IMG_20160523_131308.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 500){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <section className="jiu-intro">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt=""
          />
          </div>
          <div className="column">
            <h2 className="title">Hello</h2>
            <p className="jiu-m2">{data.dataJson.basics.summary.en}</p>
            <Link to="/experience" className="button">
              En savoir plus mon expérience
            </Link> 
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default IntroAbout;
