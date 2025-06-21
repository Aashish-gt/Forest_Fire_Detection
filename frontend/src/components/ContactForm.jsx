import React, { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "./Button"; // Your existing Button component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add form handling logic here
  };

  return (
    <div className="contact-form">
      <h2>
        Get In Touch With Us
      </h2>
      <p>
        Have questions or suggestions about FireGuardAI? Reach out to us—we’d
        love to hear from you.
      </p>
      <form onSubmit={handleSubmit}>
        <InputField
          name="fullName"
          placeholder="Your organization name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputField
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextAreaField
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
