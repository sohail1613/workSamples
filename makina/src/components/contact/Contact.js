import React from "react";
import Header from "../Header";
import './Contact.css';

const Contact = () => {
  return (
   <>
   <Header />
    <section className="contact" id="contact">
  <div className="container">
    <div className="heading text-center">
      <h2>Contact
        <span> Us </span></h2>
      <p>Feel free to contact if you have any query, we appricaite you time and feedback
        <br />Fill the form given below</p>
    </div>
    <div className="row">
      <div className="col-md-5">
        <div className="title">
          <h3>Contact detail</h3>
          <p>Feel free to contact if you have any query, we appricaite you time and feedback </p>
        </div>
        <div className="content">
          {/* Info-1 */}
          <div className="info">
            <i className="fas fa-mobile-alt" />
            <h4 className="d-inline-block">PHONE :
              <br />
              <span>+90 5322 8721 85</span></h4>
          </div>
          {/* Info-2 */}
          <div className="info">
            <i className="far fa-envelope" />
            <h4 className="d-inline-block">EMAIL :
              <br />
              <span>msbteknikelektrik@gmail.com</span></h4>
          </div>
          {/* Info-3 */}
          <div className="info">
            <i className="fas fa-map-marker-alt" />
            <h4 className="d-inline-block">ADDRESS :<br />
              <span>MUHSİN YAZICIOĞLU MAH. ALEM 2 SK. 12/3

Çubuk/Ankara, Turkey</span></h4>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <form>
          <div className="row">
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-sm-6">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows={5} id="comment" placeholder="Message" defaultValue={""} />
          </div>
          <button className="btn btn-block" type="submit">Send Now!</button>
        </form>
      </div>
    </div>
  </div>
</section>
   </>
  );
};

export default Contact;
