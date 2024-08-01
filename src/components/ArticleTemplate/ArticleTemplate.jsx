import React from "react";
import "./ArticleTemplate.scss"; // Import the styles

function ArticleTemplate({ image, title, content, type }) {
  const backgroundImageStyle = image
    ? { backgroundImage: `url(${image})` }
    : {};

  return (
    <>
      <div
        className={`article-template ${type}`}
        style={backgroundImageStyle}
      ></div>
      <div className="article-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
}

export default ArticleTemplate;
