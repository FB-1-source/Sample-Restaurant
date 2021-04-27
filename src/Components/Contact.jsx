import React from "react";

function Contact() {
  return (
    <div>
      <div className="contactbox">
        <form>
          <h1>Contact Us</h1>
          <input placeholder="First Name" type="text" required></input>
          <input placeholder="Last Name" type="text" required></input>
          <input placeholder="Email Address" type="email" required></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
