import React from "react";
import SideNavSection from "./SideNavSection";
import Store from "../../icons/Store";
import Expand from "../../icons/Expand";

const SideNav = (props: any) => {
  const { onClose, display } = props;
  const getNavItems = () => {
    return (
      <>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>

        <SideNavSection
          listItems={[
            {
              title: "Survival Games",
              link: "/leaderboard/survival-games/stats/order=wins/1",
            },
          ]}
        >
          Tournaments <Expand />
        </SideNavSection>

        <li className="nav-item">
          <a className="nav-link" href="https://discord.com">
            Discord
          </a>
        </li>
      </>
    );
  };

  return (
    <div id="sidenav" style={{ display: display }}>
      <a className="close" onClick={onClose}>
        &times;
      </a>
      <ul className="sidenav-list">
        {getNavItems()}
        <a href="https://tebex.io">
          <button className="cta">
            <Store />
            Visit Store
          </button>
        </a>
      </ul>
    </div>
  );
};
export default SideNav;
