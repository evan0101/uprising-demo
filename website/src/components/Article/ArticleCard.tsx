import React from 'react';
const ArticleCard = (props: any) => {
  const { children, img } = props;
  return (
    <div className="article-card">
      <img src={img} />
      <div className="article-text">{children}</div>
    </div>
  );
};
export default ArticleCard;
