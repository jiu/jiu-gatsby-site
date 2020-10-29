import React from "react";
import "normalize.css";
import "../styles/globalStyle.css";
//import { Helmet } from "react-helmet"

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet> */}
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
