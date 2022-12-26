import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./About.css";
import Probe from "../../assets/complete_probe.png";

const About = () => {
  return (
    <>
      <Header />
      <section className="about" id="about">
        <div className="container">
          <div className="heading text-center">
            <h2>
              About
              <span>Us</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src={Probe} alt="about" className="img-fluid" width="100%" />
            </div>
            <div className="col-lg-6">
              <h3>Lorem ipsum dolor sit amet, consectetur </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    Awesome Design
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    Creative Design
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    Better Client Service
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    Manufacturing &amp; Installation
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    High Durability
                  </h4>
                </div>
                <div className="col-md-6">
                  <h4>
                    <i className="far fa-star" />
                    Speed And Flexibility
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
