import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import styled, { keyframes } from "styled-components";
//import bg from "../assets/images/taton-moise-l2rVs8c7KFs-unsplash.jpg";

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

const titleAfterEffect =keyframes`
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

const HeroContainer =  styled.section`
  background-image: url(${props => props.bg || "none"});
  background-size: cover;
  background-position: center bottom;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title80S = styled.div`
  position: relative;
  //width: min(500px, 50%);
  height: auto;
`;

const Subtitle = styled.p`
  position: absolute;
  left: 10%;
  top: -190%;
  font-family: 'Mr Dafoe', cursive;
  font-size: clamp(4rem,10vw,30rem); 
  margin-bottom: 0;
  color: #EB219B;
  -webkit-text-fill-color: rgba(253, 90, 250, 1);
  text-shadow: -2px -2px 0 #FFBAF2;
  -webkit-filter: drop-shadow(3px 3px 1px #441F62);
  -webkit-transform: skew(-5deg,-5deg);
  font-weight: normal;
  z-index: 2;
`;

const Title = styled.p`
  position: relative;
  display: inline-block;
  font-family: 'Monoton', cursive;
  font-size: clamp(4rem,10vw,30rem);;
  font-weight: 400;
  line-height: 1;
  margin: 0;
  background-image: -webkit-linear-gradient(#022486 0%, #0AD0FD 30%, #BDFCFC 40%, #D8FFFF 44%, #00081C 44%, #00081C 50%, #074A67 52%, #1CD8FE 60%, #7FEDFE 62%, #96F5FC 70%, #0FD8FA 73%, #0BD2FD 88%, #AFFDFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #fff;

  &:before{
    position: absolute;
    content: '';
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

  &:after{
    position: absolute;
    content: '';
    left: 6px;
    top: 32px;
    width: 3px;
    height: 80px;
    background-image: -webkit-radial-gradient(#fff 0%, transparent 85%);
    z-index: 4;
    -webkit-animation-name: ${titleAfterEffect};
    -webkit-animation-duration: 5s;
    -webkit-animation-delay: 2s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  }
`;

const Label = styled.h1`
  font-family: 'Roboto Mono', monospace;
  color: white;
  text-shadow: 0px 0px 4px #d4cdd3;
  font-size: clamp(.9rem, 2vw, 1.2rem);
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
        file(relativePath: {eq: "images/taton-moise-l2rVs8c7KFs-unsplash.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1900){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <HeroContainer bg={data.file.childImageSharp.fluid.src}>
      <Title80S>
        <Subtitle>{data.dataJson.basics.fisrtname}</Subtitle>
        <Title>{data.dataJson.basics.lastname}</Title>
        <Label>{data.dataJson.basics.label}</Label>
      </Title80S>
    </HeroContainer>
  );
};
export default Hero;


