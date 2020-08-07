import React, { useState } from "react";
const SideNavSection = (props: any) => {
  const { children, listItems } = props;

  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const getDropDownItems = () => {
    return listItems.map((item: any) => {
      let listItem;
      if (typeof item !== "object") {
        listItem = item;
      } else {
        listItem = item.title;
      }
      return (
        <li className="nav-item">
          {typeof item === "object" ? (
            <a className="list-item" href={item.link + ""}>
              {listItem}
            </a>
          ) : (
            <p className="list-item">{listItem}</p>
          )}
        </li>
      );
    });
  };

  return (
    <>
      <li className="nav-item" onClick={toggleDisplay}>
        {children}
      </li>
      {display ? (
        <div className="nav-item-dropdown">
          <ul>{getDropDownItems()}</ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default SideNavSection;
