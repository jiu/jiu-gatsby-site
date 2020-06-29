import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import IntroAbout from "../components/intro-about";
import IntroSkills from "../components/intro-skills";

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <Hero />
        <IntroAbout />
        <div className="jiu-wavy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <IntroSkills />
      </section>
    </Layout>
  );
};

export default IndexPage;
