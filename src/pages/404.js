import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <SEO title="404: Not found" htmlclass="has-navbar-fixed-top" />
      <div className="container">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

        <iframe
          src="https://giphy.com/embed/RU4KgvUGsj3eE"
          width="100%"
          height="100%"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
          title="lost 404 page"
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/cat-squirrel-RU4KgvUGsj3eE">
            via GIPHY
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
