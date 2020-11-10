import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Image = styled.div`
  .gatsby-image-wrapper {
    max-width: 400px;
    max-height: 400px;
    border: solid 5px #eb219b;
    border-radius: 20%;
    margin: auto;
  }
`;

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
        file(relativePath: { eq: "images/IMG_20160523_131308.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
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
        <div className="columns is-vcentered">
          <div className="column is-centered">
            <Image>
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Me in the 80's"
              />
            </Image>
          </div>
          <div className="column">
            <h2 className="title">Hello</h2>
            <p className="jiu-mb2">{data.dataJson.basics.summary.en}</p>
            <Link to="/experiences" className="button">
              >> Experiences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroAbout;
