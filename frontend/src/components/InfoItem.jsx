import React from 'react'

function InfoItem({ icon, text }) {
  return (
    <div className="info-item">
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default InfoItem
