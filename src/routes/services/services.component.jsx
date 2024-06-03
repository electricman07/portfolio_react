import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./services.styles.scss";

const Services = () => {
  return (
    <Fragment>
      <section className="section-1 sections" id="services">
        <h2 className="services-title">Services</h2>
        <div class="services-container">
          <div className="service1 service-section">
            <div className="service-image">
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
            <div className="service-title service1-title">
              <h3>Web Design</h3>
            </div>
            <div className="service-body">
              <p>
                Web design is a process of conceptualizing, planning, and
                building a collection of electronic files that determine the
                layout, colors, text styles, structure, graphics, images, and
                use of interactive features that deliver pages to your site
                visitors.{" "}
              </p>
            </div>
            <link className="service-btn" to="./whatiswebdesign.html">
              Read More
            </link>
          </div>
          <div className="service2 service-section">
            <div className="service-image">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="service-title service2-title">
              <h3>Web Development</h3>
            </div>
            <div className="service-body">
              <p>
                Web development is the process of building and maintaining
                websites; it's the work that happens behind the scenes to make a
                website look great, work fast and perform well with a seamless
                user experience. Web developers, or 'devs', do this by using a
                variety of coding languages.{" "}
              </p>
            </div>
            <Link className="service-btn" to="./whatiswebdevelopment.html">
              Read More
            </Link>
          </div>
          <div className="service3 service-section">
            <div className="service-image">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <div className="service-title service3-title">
              <h3>Web Maintenance</h3>
            </div>
            <div className="service-body">
              <p>
                Web maintenance is the act of regularly checking your website
                for issues and mistakes and keeping it updated and relevant.
                This should be done consistently in order to keep your website
                healthy, encourage continued traffic growth, and strengthen your
                SEO and Google rankings.
              </p>
            </div>
            <Link className="service-btn" to="./whatiswebmaintenance.html">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
