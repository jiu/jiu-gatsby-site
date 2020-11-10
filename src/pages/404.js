import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout title="404: Not Found">
    <section className="section">
      <SEO title="404: Not found" htmlclass="" />
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <figure class="image is-4by3">
              <iframe
                src="https://giphy.com/embed/RU4KgvUGsj3eE"
                width="100%"
                height="100%"
                frameBorder="0"
                class="has-ratio"
                allowFullScreen
                title="lost 404 page"
              ></iframe>
            </figure>
            <p>
              <a href="https://giphy.com/gifs/cat-squirrel-RU4KgvUGsj3eE">
                via GIPHY
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
