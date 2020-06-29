import React from "react";
import { Link } from "gatsby";
import JSONData from "../data/cv-fr-julie-dubois.json";
import Image from "./image";
const introAbout = () => {
  return (
    <section class="jiu-intro">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <Image />
          </div>
          <div class="column">
            <h2 class="title">Hello</h2>
            <p className="jiu-m2">{JSONData.basics.summary}</p>
            <Link to="/experience" className="button">En savoir plus mon expérience</Link>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default introAbout;
