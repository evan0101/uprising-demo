import React from "react";
import logo from "../icons/Logo.png";
import fulllogo from "../icons/FullLogo.png";
const Logo = (props: any) => {
  const { full } = props;
  return (
    <img className={"logo " + (full && " full")} src={full ? fulllogo : logo} />
  );
};
export default Logo;
