import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Magic from "../assets/svg/magic.svg";
import Furniture from "../assets/svg/furniture-and-household.svg";
import Photography from "../assets/svg/photography.svg";
import Coffee from "../assets/svg/coffee-cup.svg";

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
        <h2 className="title has-text-center">Mes spécialités</h2>
        <div className="columns is-centered">
          {data.dataJson.services.map((service, index) => {
            const ServiceIcon = IconComp[service.img];
            return (
              <div className="column has-text-centered" key={index}>
                <ServiceIcon />
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
