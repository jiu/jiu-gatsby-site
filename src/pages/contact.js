import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import SocialIcons from "../components/SocialIcons";

export default function Contact() {
  return (
    <Layout title="Contact">
      <SEO title="contact" htmlclass=""></SEO>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="title jiu-title">Get in touch...</h2>
              <SocialIcons size="large" />
            </div>
            <div className="column">
              <h2 className="title">or send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
