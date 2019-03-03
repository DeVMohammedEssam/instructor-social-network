import React from "react";
const InputFiled = ({ type, iconClass, placeholder, name }) => {
  return (
    <div className="input-container">
      <input
        className="main-input"
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <i className={`fa fa-${iconClass}`} />
    </div>
  );
};

export default InputFiled;
