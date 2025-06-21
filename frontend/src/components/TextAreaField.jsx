import React from "react";

const TextAreaField = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="text-area"
    />
  );
};

export default TextAreaField;
