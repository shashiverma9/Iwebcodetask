import React, { useState } from "react";

const FormInput = ({ showIcon }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="field-wrapper">
    {showIcon?<img className="icon" src="check.svg" />: showIcon===false ?<img className="icon" src="pencil.svg" alt="logo"/>:null}
      <input
        className="input-field"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
