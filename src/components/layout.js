import React from "react";
//import { Helmet } from "react-helmet"
import "../styles/app.scss";

import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet> */}
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
