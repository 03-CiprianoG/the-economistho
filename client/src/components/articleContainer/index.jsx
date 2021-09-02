import React from "react";
import AnchorButton from "../anchorButton";

const ArticleContainer = (props) => {
  return (
    <AnchorButton
      href={props.url.substring(25)}
      style={{
        gap: "10px",
        padding: "20px",
        boxShadow: "0px 0px 2px 0px rgb(0, 0, 0, 0.35)",
        margin: "10px",
      }}
      img={props.img}
      imgStyle={{ width: "100%" }}
      label={props.headline}
      labelStyle={props.labelStyle}
    />
  );
};

export default ArticleContainer;
