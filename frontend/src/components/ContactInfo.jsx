import React from 'react'
import InfoItem from "./InfoItem";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Contact Us</h2>
      <InfoItem
        icon={<MdOutlineMail className="mail-icon" />}
        text="fireguardai@gmail.com"
      />
      <InfoItem
        icon={<IoLocationSharp className="location-icon" />}
        text="Bijaypur, Pokhara, Nepal"
      />
      <InfoItem
        icon={<FaPhone className="phone-icon" />}
        text="+977 9800000000"
      />
    </div>
  );
}

export default ContactInfo;
