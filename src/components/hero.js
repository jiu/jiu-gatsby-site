import React from "react";
import Header from "./header";

const Hero = () => {
  return (
    <section class="hero jiu-hero is-fullheight">
      <Header />

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="title-80s">
            <p class="subtitle">Julie</p>
            <p class="title">Dubois</p>
            <h1 class="label">Front-end developer - Junior data scientist</h1>
          </div>
          {/* <h1 class="title">{JSONData.basics.name}</h1> */}
        </div>
      </div>
    </section>
  );
};
export default Hero;
