import React from "react";
import contactImage from "../images/contact.jpg";
import "../STYLES/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
      </div>

      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="PUSH">
          <label htmlFor="name">Full name</label>
          <input name="name" placeholder="Enter Your Name" type="text"></input>
          <label htmlFor="email">Email</label>
          <input name="name" placeholder="Enter Your Email" type="text"></input>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Enter Message"
            rows="7"
          ></textarea>
          <button type="submit">SUBMIT!!!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
