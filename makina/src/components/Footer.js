import React from "react";
import "./Footer.css";
import Logo from "../assets/logos.avif";
const Footer = () => {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/*  FOOTER START */}
        <div className="footer">
          <div className="inner-footer">
            {/*  for company name and description */}
            <div className="footer-items">
              <a href="">
                <img src={Logo} alt="Logo"/>
              </a>
              {/* <h1>MSB Makina</h1> */}
              {/* <img src={Logo}/> */}
              <p>
                We privide high qaulity machines and our <br />
                customer satisfaction is priority.
              </p>
            </div>
            {/*  for quick links  */}
            <div className="footer-items">
              <h3>Quick Links</h3>
              <div className="border1" /> {/*for the underline */}
              <ul>
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>Search</li>
                </a>
                <a href="/contact">
                  <li>Contact</li>
                </a>
                <a href="/about">
                  <li>About</li>
                </a>
              </ul>
            </div>
            {/*  for some other links */}
            <div className="footer-items">
              <h3>Services</h3>
              <div className="border1" /> {/*for the underline */}
              <ul>
                <a href="/products">
                  <li>Grain Sampler</li>
                </a>
                <a href="#">
                  <li>Elektrik</li>
                </a>
                <a href="#">
                  <li>Nakliye</li>
                </a>
                <a href="/products">
                  <li>Makine</li>
                </a>
              </ul>
            </div>
            {/*  for contact us info */}
            <div className="footer-items">
              <h3>Contact us</h3>
              <div className="border1" />
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true" />
                  +90-542 681 78 67
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=msbteknikelektrik@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </a>
                  msbteknikelektrik@gmail.com
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/jzty16BDVQ7i2sCC8">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </a>
                  Çubuk/Ankara
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send/?phone=905322872185&text&type=phone_number&app_absent=0">
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </a>
                  Quick Enuiry
                </li>
                <li>
                  <a href="https://www.instagram.com/msbelektrikmakina/">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  Follow on Instagram
                </li>
              </ul>
              {/*   for social links */}
              <div className="social-media">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-square" />
                </a>
              </div>
            </div>
          </div>
          {/*   Footer Bottom start  */}
          <div className="footer-bottom">Copyright © Msb Makina 2022.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
