import React, { useState } from "react";
import Logo from "../Logo";
import CopyServerIp from "../CopyServerIp";
import Store from "../../icons/Store";
import Expand from "../../icons/Expand";
import Menu from "../../icons/Menu";
import Dropdown from "../Dropdown/Dropdown";
import SideNav from "./SideNav";

const Nav = () => {
  const [displaySideNav, setDisplaySideNav] = useState("none");
  const getNavItems = () => {
    return (
      <>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <Dropdown
            hex="e100ff"
            listItems={[
              {
                title: "Survival Games",
                link: "/leaderboard/survival-games/stats/order=wins/1",
              },
            ]}
          >
            Tournaments <Expand />
          </Dropdown>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://discord.com">
            Discord
          </a>
        </li>
      </>
    );
  };

  const getStoreButton = () => {
    return (
      <a href="https://tebex.io">
        <button className="cta">
          <Store />
          Visit Store
        </button>
      </a>
    );
  };
  return (
    <>
      <SideNav
        display={displaySideNav}
        onClose={() => setDisplaySideNav("none")}
      />
      <div id="nav-container">
        <div id="nav">
          <a href="/">
            <Logo />
          </a>

          <ul id="nav-list">{getNavItems()}</ul>
          <div id="nav-right">
            <CopyServerIp />
            <div id="expand" onClick={() => setDisplaySideNav("block")}>
              <Menu />
            </div>
            <div id="store">{getStoreButton()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
