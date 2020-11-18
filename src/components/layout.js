import React, { useState, useEffect, useRef } from "react";
import "normalize.css";
import "../styles/globalStyle.scss";

import Footer from "./Footer";
import Header from "./Header";
import PageTitle from "../components/PageTitle";
import Hero from "../components/Hero";

const Layout = ({ children, title }) => {
  const elHeighter = useRef(null);
  const [scrollState, setScrollState] = useState("top");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const elHeight = elHeighter.current.offsetHeight;
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if (scrollTop >= elHeight) {
      if (scrollState !== "amir") {
        setScrollState("amir");
      }
    } else {
      if (scrollState !== "top") {
        setScrollState("top");
      }
    }
  }, [scrollState, scrollTop]);

  if (title !== "Home") {
    return (
      <>
        <Header scrollState={scrollState} />
        <div ref={elHeighter}>
          <PageTitle title={title} />
        </div>
        {children}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header scrollState={scrollState} />
        <div ref={elHeighter}>
          <Hero />
        </div>
        {children}
        <Footer />
      </>
    );
  }
};

export default Layout;
