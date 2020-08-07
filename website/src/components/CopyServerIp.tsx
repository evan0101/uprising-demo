import React from "react";
import Copy from "../icons/Copy";
const CopyServerIp = () => {
  const copyIp = () => {
    const element = document.createElement("textarea");
    element.value = "mc.playuprising.com";
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
  };

  return (
    <div className="copyserverip" onClick={copyIp}>
      <div className="info">
        <div className="click-label">Click to copy IP</div>
        <div className="ip">MC.PLAYUPRISING.COM</div>
      </div>
      <div className="copy">
        <Copy />
      </div>
    </div>
  );
};
export default CopyServerIp;
