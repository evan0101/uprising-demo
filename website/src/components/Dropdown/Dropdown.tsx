import React, { useState, useEffect } from "react";
const Dropdown = (props: any) => {
  const { listItems = [], hex, children, selected = "" } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [node, setNode] = useState();

  useEffect(() => {
    if (node != null) {
      node.addEventListener("mouseenter", () => toggleDropdown(true));
      node.addEventListener("mouseleave", () => toggleDropdown(false));
    }
    return () => {
      if (node != null) {
        node.removeEventListener("mouseenter", () => toggleDropdown(true));
        node.removeEventListener("mouseleave", () => toggleDropdown(false));
      }
    };
  }, [node]);

  const toggleDropdown = (value: boolean) => {
    setIsOpen(value);
  };

  const getListItems = () => {
    return listItems.map((listItem: string) => (
      <li className={hex}>{listItem}</li>
    ));
  };
  return (
    <div
      ref={noderef => setNode(noderef)}
      className="dropdown relative"
      onMouseEnter={() => toggleDropdown(true)}
    >
      {!isOpen ? (
        <>{children}</>
      ) : (
        <>
          <>{children}</>

          <div className={"dropdown-box"}>
            <div className={"dropdown-list"}>
              {listItems.map((item: any) => {
                let listItem;
                if (typeof item !== "object") {
                  listItem = item;
                } else {
                  listItem = item.title;
                }
                return (
                  <>
                    {typeof item === "object" ? (
                      <a
                        className="list-item"
                        style={
                          selected == listItem || selected == listItem.title
                            ? { color: `#${hex}`, background: `#${hex}33` }
                            : {}
                        }
                        href={item.link + ""}
                      >
                        {listItem}
                      </a>
                    ) : (
                      <p
                        className="list-item"
                        style={
                          selected == listItem || selected == listItem.title
                            ? { color: `#${hex}`, background: `#${hex}33` }
                            : {}
                        }
                      >
                        {listItem}
                      </p>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Dropdown;
