import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const TitleContainer = styled.section`
  padding: 7rem 3rem 6rem;
  background: #a400ff;
  position: relative;
  h2 {
    color: white;
  }

  .skewed {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2c3e50;
    z-index: 0;
    transform: skewY(-45deg);
    transform-origin: top left;
    opacity: 0.5;
  }

  @media screen and (min-width: 700px) {
    .skewed {
      transform: skewY(-5deg);
      transform-origin: top left;
    }
  }
`;

const PageTitle = ({ title }) => {
  if (title !== "Home") {
    return (
      <TitleContainer className="section jumbo">
        <div className="skewed"></div>
        <div className="container">
          <h2 className="title">{title}</h2>
        </div>
      </TitleContainer>
    );
  } else {
    return <Hero />;
  }
};

export default PageTitle;
