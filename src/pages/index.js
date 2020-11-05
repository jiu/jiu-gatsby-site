import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IntroAbout from "../components/IntroAbout";
import IntroSkills from "../components/IntroSkills";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <Hero />
      <IntroAbout />
      <div className="jiu-wavy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <IntroSkills />
    </Layout>
  );
};

export default IndexPage;
