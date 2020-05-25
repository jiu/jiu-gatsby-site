import React from "react"
import JSONData from "../../content/cv-fr-julie-dubois.json"

const Footer = () => (
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
      {JSONData.basics.profiles.map((data, index) => {
          return (
        <a to={data.url}>
            {data.network}
          </a>
          )
        })}
      </p>
    </div>
  </footer>
)

export default Footer
