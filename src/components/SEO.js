import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ children, location, description, title, image, htmlclass }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s - ${data.site.siteMetadata.title}`}>
      <html lang="en" className={htmlclass} />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <link rel="alternate icon" href="favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={data.site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta
        property="og:image"
        content={image || "//www.iamjiu.eu/iamjiu-og.png"}
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={data.site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta name="theme-color" content="#eb219b"></meta>
      {children}
    </Helmet>
  );
};

export default SEO;
