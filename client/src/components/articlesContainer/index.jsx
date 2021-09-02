import React from "react";

//importing components
import ArticleContainer from "../articleContainer/index";

const ArticlesContainer = (props) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: " center",
        margin: "25px auto 25px auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "28px",
          paddingBottom: "10px",
        }}
      >
        Most recent articles
      </h1>
      <div
        style={
          document.documentElement.clientWidth > 480
            ? {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr ",

                width: "fit-content",
                alignItems: "center",
              }
            : {
                display: "grid",
                gridTemplateColumns: "1fr",
                gridGap: "25px",
                padding: "25px",
                width: " fit-content",
              }
        }
      >
        {props.articles.length > 0 &&
          props.articles.map((x) => {
            return (
              <ArticleContainer
                key={x.position}
                url={x.item.url}
                img={x.item.image}
                imgStyle={{ width: "100%" }}
                headline={x.item.headline}
                labelStyle={{ fontSize: "20px", marginTop: "10px" }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ArticlesContainer;
