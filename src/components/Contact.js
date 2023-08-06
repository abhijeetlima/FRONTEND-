import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here, such as sending the form data to the server or displaying a success message.
    console.log("Form data:", formData);
    // Clear the form fields after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-us-container">
      <div className="card contact-card">
        <div className="card-body">
          <h2 className="card-title">Contact Us</h2>
          <p className="card-text">
            If you have any questions or inquiries, feel free to get in touch
            with us. We'll be happy to assist you.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
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
                <label htmlFor="email">Email:</label>
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
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="card hotel-details">
        <div className="card-body">
          <h3 className="card-title">Hotel Details</h3>
          <ul className="list-unstyled">
            <li>
              <strong>Address:</strong> 123 Main Street, Shimla, India
            </li>
            <li>
              <strong>Phone:</strong> +91 70080 44133
            </li>
            <li>
              <strong>Email:</strong> info@abhijithotel.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
