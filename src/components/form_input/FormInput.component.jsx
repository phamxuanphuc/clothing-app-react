import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" value={otherProps.value} {...otherProps} />
    {label ? (
      <label
        htmlFor={otherProps.name}
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
