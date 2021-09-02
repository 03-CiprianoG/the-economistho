import React from "react";

const InputField = (props) => {
  return (
    <input
      style={{
        minWidth: "260px",
        padding: "10px",
        outline: "none",
        borderRadius: "4px",
        border: "1px solid ",
        lineHeight: "1.4",
        width: "100%",
        fontSize: "16px",
        maxWidth: "600px",
        marginBottom: "25px",
      }}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      type={props.type}
    ></input>
  );
};

export default InputField;
