import React from "react";
const IconCard = (props: any) => {
  const { icon, children, timestamp, type = "", index } = props;

  return (
    <div id={index} className={"iconcard " + type}>
      {icon && (
        <div id={index} className={"icon " + type}>
          {icon}
        </div>
      )}
      <div className={"iconcard-content " + type}>
        <p>{children}</p>
      </div>
      {timestamp && <div className="timestamp">{timestamp}</div>}
    </div>
  );
};
export default IconCard;
