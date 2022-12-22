import React from "react";
import "./Footer.css";
import MSBLogo from "../assets/logos/logos.avif";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//href="https://mail.google.com/mail/?view=cm&fs=1&to=msbteknikelektrik@gmail.com"
//href="https://goo.gl/maps/GUe4AzdvCWYQ8Sdo7"

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-upper">
          {/* contacts */}
          <div className="contact">
            <div className="call">
              <div className="icon">
                <div className="icons">
                  <CallIcon />
                </div>
                <div className="number">
                  <span>+90 542 681 7867</span>
                </div>
              </div>
            </div>

            <div className="mail">
              <div className="icon">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=msbteknikelektrik@gmail.com">
                  <div className="icons">
                    <MailOutlineIcon
                      style={{ color: "white", size: "100px" }}
                    />
                  </div>
                </a>
                <div className="gmail">
                  <span>msbteknikelektrik@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="location">
              <div className="icon">
                <a href="https://goo.gl/maps/GUe4AzdvCWYQ8Sdo7">
                  <div className="icons">
                    <LocationOnIcon style={{ color: "white", size: "100px" }} />
                  </div>
                </a>
                <div className="map">
                  <span>
                    MUHSİN YAZICIOĞLU MAH. ALEM 2 SK. 12/3 Çubuk/Ankara
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* useful links */}
          <div className="usefull-links">
            <div className="footer-content" style={{ display: "flex" }}>
              <div className="company">
                <div className="footer-logo">
                  <a href="#">
                    <img src={MSBLogo} alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    PROFESYONEL HİZMETİMİZ VE TECRÜBELİ EKİBİMİZLE SİZLERLEYİZ..
                  </p>
                </div>
              </div>
              {/* about  */}
              <div className="about">
                <h3>About Us</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>

                  <li>
                    <a href="#">Contact</a>
                  </li>

                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  {/* <li>
                      <a href="#">Expert Team</a>
                    </li> */}
                  <li>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sohail1613@gmail.com">
                      Contact Developer
                    </a>
                  </li>
                </ul>
              </div>
              {/* related with msb */}

              <div className="msb">
                <h3>MSB Makina</h3>

                <ul>
                  <li>
                    <a href="#">Grain Sampler</a>
                  </li>
                  <li>
                    <a href="#">Electronic</a>
                  </li>

                  <li>
                    <a href="#">All Products</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Enquiry</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* social media accounts and copy right */}
        <div className="social-contact">
          {/* <span>Follow us</span> */}
          <div className="icon-contact">
            <div className="social-icons" >
              <a href="#">
                <i className="twitter" />
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/msbelektrikmakina/">
                <i className="instagram" />
                <InstagramIcon />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=905322872185&text&type=phone_number&app_absent=0">
                <i className="facebook" />
                <FacebookIcon />
              </a>
              {/* <a href="#">
                <i className="youtube" />
                <YouTubeIcon />
                </a> */}
              <a href="https://api.whatsapp.com/send/?phone=905322872185&text&type=phone_number&app_absent=0">
                <i className="whatsapp" />
                <WhatsAppIcon />
              </a>
            </div>
            <div className="up-arrow">
              <KeyboardArrowUpIcon />
            </div>
            <div className="copyright-area">
              <div className="copyright">
                <div className="copyright-text">
                  <span> © 2018, All Right Reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
