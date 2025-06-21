import React from "react";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";
import "../../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      
        <ContactInfo />
      
      
        <ContactForm />
     
    </section>
  );
};

export default ContactSection;
