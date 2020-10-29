import React from "react";
import { Link } from "gatsby";

const introSkills = () => {
  return (
    <section className="jiu-skills">
      <div className="container">
        <h2 className="title has-text-center">Mes spécialités</h2>
        <div className="columns is-centered">
          <div className="column has-text-centered">
            
            <p className="jiu-m2">Code</p>
          </div>
          <div className="column has-text-centered">
            
            <p className="jiu-m2">Visual</p>
          </div>
          <div className="column has-text-centered">
            
            <p className="jiu-m2">Photography</p>
          </div>
          <div className="column has-text-centered">
            
            <p className="jiu-m2">Data</p>
          </div>
        </div>
        <Link to="/competences" className="button">
          Voir toutes mes compétences
        </Link>
      </div>
    </section>
  );
};

export default introSkills;
