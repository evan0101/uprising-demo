import React from "react";
const Heading = (props: any) => {
  const { children } = props;
  return (
    <div className="heading">
      <h2>{children}</h2>
      <div className="heading-underline"></div>
    </div>
  );
};
export default Heading;
