import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IntroAbout from "../components/IntroAbout";
import IntroSkills from "../components/IntroSkills";

const IndexPage = () => {
  return (
    <Layout>
        <Hero />
        <IntroAbout />
        <div className="jiu-wavy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <IntroSkills />
    </Layout>
  );
};

export default IndexPage;
