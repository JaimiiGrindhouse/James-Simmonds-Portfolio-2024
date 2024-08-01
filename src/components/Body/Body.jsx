import React, { useEffect, useState } from "react";
import ArticleTemplate from "../ArticleTemplate/ArticleTemplate";
import "./Body.scss";
import articlesdata from "../../data/articles.json";

function Body() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesdata);
  }, []);

  return (
    <div className="body">
      {articles.map((article) => (
        <div key={article.id} className={`article ${article.id}`}>
          <ArticleTemplate
            image={article.image} // Pass the image URL
            title={article.title}
            content={article.content}
            type={article.type} // This is used to determine the className
          />
        </div>
      ))}
    </div>
  );
}

export default Body;
