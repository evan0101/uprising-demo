import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const NavFooter = (props: any) => {
  const { children } = props;
  return (
    <>
      <Nav />
      <div className="content">
        {children}
        <Footer />
      </div>
    </>
  );
};
export default NavFooter;
