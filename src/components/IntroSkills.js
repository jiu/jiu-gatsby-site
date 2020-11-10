import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Magic from "../assets/svg/magic.svg";
import Furniture from "../assets/svg/furniture-and-household.svg";
import Photography from "../assets/svg/photography.svg";
import Coffee from "../assets/svg/coffee-cup.svg";
import styled from "styled-components";

const IconContainer = styled.div`
  max-width: 250px;
  margin: auto;
  padding: 1rem;
`;

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
      }
    `
  );
  const IconComp = {
    Visual: Magic,
    Data: Furniture,
    Photography: Photography,
    Code: Coffee,
  };
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-center">What I do</h2>
        <div className="columns is-centered">
          {data.dataJson.services.map((service, index) => {
            const ServiceIcon = IconComp[service.img];
            return (
              <div className="column has-text-centered" key={index}>
                <IconContainer>
                  <ServiceIcon />
                </IconContainer>
                <p>{service.name}</p>
              </div>
            );
          })}
        </div>
        <Link to="/skills" className="button">
          >> Skills
        </Link>
      </div>
    </section>
  );
};

export default IntroSkills;
