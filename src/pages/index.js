import React from "react";
import Layout from "../components/Layout";
import IntroAbout from "../components/IntroAbout";
import IntroSkills from "../components/IntroSkills";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <SEO
        title="Digital multi profile"
        description="A front-end developer learning data science and passionated about design."
      />

      <IntroAbout />
      <div className="jiu-wavy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <IntroSkills />
    </Layout>
  );
};

export default IndexPage;
