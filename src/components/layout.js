import React from "react";
import "normalize.css";
import "../styles/globalStyle.scss";

import Footer from "./Footer";
import Header from "./Header";
import PageTitle from "../components/PageTitle";

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      <PageTitle title={title} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
