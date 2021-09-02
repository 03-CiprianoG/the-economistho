import React from "react";

const Button = (props) => {
  return (
    <button style={props.style} onClick={props.handleClick}>
      {props.label}
    </button>
  );
};

export default Button;
