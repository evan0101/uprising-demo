import React from "react";
import ArticleCard from "../Article/ArticleCard";
const Article = (props: any) => {
  const { title, date, src = "", children } = props;
  return (
    <div className="article">
      <div className="article-heading">
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
      <div className="article-content">
        <ArticleCard img={src}>{children}</ArticleCard>
      </div>
    </div>
  );
};
export default Article;
