import React from "react";
import Logo from "../Logo";
import Social from "../Social/Social";
const Footer = () => {
  return (
    <div id="footer-container">
      <div id="footer">
        <Logo full />
        <div id="footer-copyright">
          <h3>Copyright 2020 - Uprising</h3>
          <h4>Some Rights Reserved</h4>
        </div>
        <div id="social">
          <Social />
        </div>
      </div>
    </div>
  );
};
export default Footer;
