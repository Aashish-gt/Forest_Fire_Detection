import React from "react";

const InputField = ({ name, type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputField;
