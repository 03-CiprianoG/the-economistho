import React from "react";

const AnchorButton = (props) => {
  return (
    <a href={props.href} target={props.target} style={props.style}>
      {props.img && <img src={props.img} style={props.imgStyle} alt="" />}
      <p style={props.labelStyle}>{props.label}</p>
    </a>
  );
};

export default AnchorButton;
