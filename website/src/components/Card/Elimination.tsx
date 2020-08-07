import React from "react";
const Elimination = (props: any) => {
  const { children, timestamp } = props;
  return (
    <div className="ic elimination">
      <div>{children}</div>

      <div className="timestamp">{timestamp}</div>
    </div>
  );
};
export default Elimination;
