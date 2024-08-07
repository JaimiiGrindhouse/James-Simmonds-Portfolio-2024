import React, { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageTitle: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto URL
    const mailto = `mailto:your.email@example.com?subject=Message from ${
      formData.name
    }&body=Name: ${formData.name}%0AEmail: ${
      formData.email
    }%0AMessage Title: ${encodeURIComponent(
      formData.messageTitle
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;

    // Open the user's email client with the populated data
    window.location.href = mailto;
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="messageTitle">Subject</label>
          <input
            type="text"
            id="messageTitle"
            name="messageTitle"
            value={formData.messageTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
