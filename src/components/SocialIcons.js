import React from "react";
import { ImInstagram, ImDribbble, ImLinkedin, ImGithub } from "react-icons/im";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const SocialLink = styled.ul`
  display: inline-flex;
  li {
    padding: 0 0.5rem 0.5rem 0.5rem;
  }
  &.large {
    li:first-child {
      padding: 0 0.5rem 0.5rem 0rem;
    }
    a {
      font-size: 40px;
      color: #363636;
    }
  }
`;

const SocialIcons = ({ size }) => {
  const data = useStaticQuery(
    graphql`
      query {
        dataJson {
          basics {
            profiles {
              network
              url
              icon
            }
          }
        }
      }
    `
  );
  const NetworkIconComp = {
    Linkedin: ImLinkedin,
    Instagram: ImInstagram,
    Github: ImGithub,
    Dribbble: ImDribbble,
  };

  return (
    <SocialLink className={size}>
      {data.dataJson.basics.profiles.map((data, index) => {
        const NetworkIcon = NetworkIconComp[data.network];
        return (
          <li key={index}>
            <a href={data.url} title={data.network}>
              <NetworkIcon />
            </a>
          </li>
        );
      })}
    </SocialLink>
  );
};

export default SocialIcons;
