import React from "react";
const Card = (props: any) => {
  const { children, img, title } = props;
  return (
    <div className={"card " + (img && "image")}>
      {img && <img src={img} />}
      <div className="text">
        <div className="title">{title}</div>
        {children}
      </div>
    </div>
  );
};
export default Card;
