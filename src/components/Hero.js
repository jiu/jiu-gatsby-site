import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { keyframes } from "styled-components";
import { GiTronArrow } from "react-icons/gi";

const titleBeforeEffect = keyframes`
  0% {
      left: -35px;
      top: 74px;
      opacity: 0;
    }
  15% {
      left: -35px;
      top: 74px;
      opacity: 1;
    }
  30% {
      left: -35px;
      top: 74px;
      opacity: 0;
    }
  35% {
      left: 50%;
      top: 45px;
      opacity: 0;
    }
  50% {
      left: 50%;
      top: 45px;
      opacity: 1;
    }
  65% {
      left: 50%;
      top: 45px;
      opacity: 0;
    }
  70% {
      left: 95%;
      top: 45px;
      opacity: 0;
    }
  85% {
      left: 95%;
      top: 45px;
      opacity: 1;
    }
  100% {
      left: 95%;
      top: 45px;
      opacity: 0;
    }
`;

const titleAfterEffect = keyframes`
  0% {
      left: 6px;
      top: 32px;
      opacity: 0;
    }
  15% {
      left: 6px;
      top: 32px;
      opacity: 1;
    }
  30% {
      left: 6px;
      top: 32px;
      opacity: 0;
    }
  35% {
      left: 55%;
      top: 11px;
      opacity: 0;
    }
  50% {
      left: 55%;
      top: 11px;
      opacity: 1;
    }
  65% {
      left: 55%;
      top: 11px;
      opacity: 0;
    }
  70% {
      left: 100%;
      top: 10px;
      opacity: 0;
    }
  85% {
      left: 100%;
      top: 10px;
      opacity: 1;
    }
  100% {
      left: 100%;
      top: 10px;
      opacity: 0;
    }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(70deg);
  }
  40% {
    transform: translateY(-30px) rotate(70deg);
  }
  60% {
    transform: translateY(-15px) rotate(70deg);
  }
`;

const Herocontainer = styled.section`
  background-image: url(${(props) => props.bg || "none"});
  background-size: cover;
  background-position: center bottom;
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  overflow: hidden;
  svg {
    position: absolute;
    bottom: 2rem;
    color: white;
    -moz-animation: ${bounce} 2s infinite;
    -webkit-animation: ${bounce} 2s infinite;
    animation: ${bounce} 2s infinite;
  }
`;

const Title80S = styled.div`
  position: relative;
  //width: min(500px, 50%);
  height: auto;
`;

const Subtitle = styled.p`
  position: absolute;
  left: 10%;
  top: -90%;
  font-family: "Mr Dafoe", cursive;
  font-size: clamp(4rem, 10vw, 30rem);
  margin-bottom: 0;
  color: #eb219b;
  -webkit-text-fill-color: #eb219b;
  text-shadow: -2px -2px 0 #ffbaf2;
  -webkit-filter: drop-shadow(3px 3px 1px #441f62);
  -webkit-transform: skew(-5deg, -5deg);
  font-weight: normal;
  z-index: 2;
`;

const Title = styled.p`
  position: relative;
  display: inline-block;
  font-family: "Monoton", cursive;
  font-size: clamp(4rem, 10vw, 30rem);
  font-weight: 400;
  line-height: 1;
  margin: 0;
  background-image: -webkit-linear-gradient(
    #022486 0%,
    #0ad0fd 30%,
    #bdfcfc 40%,
    #d8ffff 44%,
    #00081c 44%,
    #00081c 50%,
    #074a67 52%,
    #1cd8fe 60%,
    #7fedfe 62%,
    #96f5fc 70%,
    #0fd8fa 73%,
    #0bd2fd 88%,
    #affdff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #fff;

  &:before {
    position: absolute;
    content: "";
    left: -35px;
    top: 74px;
    width: 80px;
    height: 3px;
    background-image: -webkit-radial-gradient(#fff 0%, transparent 85%);
    z-index: 4;
    -webkit-animation-name: ${titleBeforeEffect};
    -webkit-animation-duration: 5s;
    -webkit-animation-delay: 2s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }

  &:after {
    position: absolute;
    content: "";
    left: 6px;
    top: 32px;
    width: 3px;
    height: 80px;
    background-image: -webkit-radial-gradient(#fff 0%, transparent 85%);
    z-index: 4;
    animation-name: ${titleAfterEffect};
    -webkit-animation-duration: 5s;
    -webkit-animation-delay: 2s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }
`;

const Label = styled.h1`
  font-family: "Roboto Mono", monospace;
  color: white;
  text-shadow: 0px 0px 4px #d4cdd3;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  right: 0;
  position: absolute;
  margin: 0;
`;

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        dataJson {
          basics {
            label
            fisrtname
            lastname
          }
        }
        file(
          relativePath: { eq: "images/taton-moise-l2rVs8c7KFs-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <Herocontainer bg={data.file.childImageSharp.fluid.src} className="jumbo">
      <Title80S>
        <Subtitle>{data.dataJson.basics.fisrtname}</Subtitle>
        <Title>{data.dataJson.basics.lastname}</Title>
        <Label>{data.dataJson.basics.label}</Label>
      </Title80S>
      <GiTronArrow></GiTronArrow>
    </Herocontainer>
  );
};
export default Hero;
